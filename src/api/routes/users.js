/* eslint-disable no-console */
const wrapThrow = require("express-async-handler");
const HttpStatus = require("http-status");
const { Router } = require("express");

const { validate, schemas } = require("../validations");

module.exports = ({ useCases }) => {
  const router = Router();

  router.get("/", async (req, res) => {
    const getAll = await useCases.user.getAll();
    res.status(HttpStatus.OK).json(getAll);
  });

  router.get("/:id", async (req, res) => {
    const user = req.params.id;
    const get = await useCases.user.get(user);
    res.status(HttpStatus.OK).json(get);
  });

  router.post(
    "/",
    validate(schemas.user.create),
    wrapThrow(async (req, res) => {
      try {
        const user = req.locals.sanitized.body;

        const newUser = await useCases.user.create(user);

        res.status(HttpStatus.OK).json(newUser);
      } catch (err) {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json(err.errors[0].message);
      }
    })
  );

  return router;
};
