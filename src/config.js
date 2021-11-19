require("dotenv").config();

const {
  NODE_ENV,
  
  PORT,
  API_PORT,
  API_HOST,
  API_CORS,

  DB_CONNECTION_URI,
  DB_NAME,
  AUTH_KEY,

} = process.env;

module.exports = {
  NODE_ENV,
  AUTH_KEY,
  API: {
    CORS: API_CORS,
    PORT: PORT || API_PORT || 8081,
    HOST: API_HOST,
  },
  DB: {
    NAME: DB_NAME,
    CONNECTION_URI: DB_CONNECTION_URI,
  },
};
