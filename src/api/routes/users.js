const wrapThrow = require("express-async-handler");
const HttpStatus = require("http-status");
const { Router } = require("express");

const { validate, schemas } = require("../validations");

module.exports = ({ useCases }) => {
  const router = Router();

  router.post(
    "/",
    validate(schemas.user.create),
    wrapThrow(async (req, res) => {
      const user = req.locals.sanitized.body;
      const newUser = await useCases.user.create(user);
      res.status(HttpStatus.OK).json(newUser);
    })
  );

  return router;
};

