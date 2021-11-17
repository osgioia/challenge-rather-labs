const { Sequelize } = require("sequelize");
const factory = require("./models");

const Database = async ({
  config: {
    DB: {
      CONNECTION_URI,
      NAME,
    }
  },
}) => {
  const connection = new Sequelize(
    [CONNECTION_URI, NAME].join("/"),
  );

  await connection.authenticate();
  
  Object.values(factory).forEach((model) => model(connection));

  await connection.sync();

  return {
    connection,
    models: connection.models
  };
};

module.exports = Database;
