const HTTP = require("http-status");
const ApplicationError = require("../errors");

module.exports = () => ({
  /* eslint-disable-next-line no-unused-vars*/
  handleError: async (error, req, res, next) => {
    if (error.status) return res.status(error.status).json({ error: error.message });
    if (error instanceof ApplicationError) {
      switch (error.constructor) {
      default:
        return res.status(HTTP.BAD_REQUEST).json({ error: error.code });
      }
    }
    res.status(500).end();
    throw error;
  },
});
