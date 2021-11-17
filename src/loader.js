const UseCases = require("./use-cases");
const Logger = require("./lib/logger");
const Database = require("./database");
const Api = require("./api");

module.exports = async (config) => {

  const logger = Logger(config);

  const database = await Database({ logger, config });

  const useCases = UseCases({
    logger,
    config,
    database,
  });

  const api = Api({
    logger,
    config,
    useCases,
  });

  return {
    database,
    useCases,
    api,
  };
};
