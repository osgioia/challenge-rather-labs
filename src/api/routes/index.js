const { Router } = require("express");
const createUserRoutes = require("./users");
const jwt = require("jsonwebtoken");
const HttpStatus = require("http-status");
const createMiddlewares = require("../middlewares");

module.exports = (dependencies) => {
  const userRoutes = createUserRoutes(dependencies);
  const middlewares = createMiddlewares(dependencies);
  const router = Router();

  router.use("/users", middlewares.auth, userRoutes);
  router.post("/auth", async (req, res) => {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, process.env.AUTH_KEY, {
      expiresIn: 1440,
    });
    res.status(HttpStatus.OK).json({
      mensaje: "Autenticación correcta",
      token: token,
    });
  });

  return router;
};
