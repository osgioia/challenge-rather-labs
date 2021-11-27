const Express = require("express");

const createRouter = require("./routes");
const createErrorHandlers = require("./errors");
const createMiddlewares = require("./middlewares");

module.exports = (dependencies) => {
  const errorHandlers = createErrorHandlers(dependencies);
  const middlewares = createMiddlewares(dependencies);
  const router = createRouter({ ...dependencies, middlewares });
  const api = Express();

  api.use(Express.json());
  api.use(Express.urlencoded({ extended: true }));

  api.use(router);
  api.use(errorHandlers.handleError);

  return api;
};
