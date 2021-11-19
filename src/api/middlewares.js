/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable func-style */
const jwt = require("jsonwebtoken");

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions

module.exports = () => ({
  /* eslint-disable-next-line no-unused-vars*/
  auth: async (req, res, next) => {
    const token = req.headers.token;

    if (token) {
      jwt.verify(token, process.env.AUTH_KEY, (err, decoded) => {
        if (err) {
          return res.json({ mensaje: "Token inválida" });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({
        mensaje: "Token no proveída.",
      });
    }
  },
});
