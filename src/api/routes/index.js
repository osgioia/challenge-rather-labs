const { Router } = require("express");
const createUserRoutes = require("./users");

module.exports = (dependencies) => {
  const userRoutes = createUserRoutes(dependencies);
  const router = Router();

  router.use("/users", userRoutes);
  return router;
};
