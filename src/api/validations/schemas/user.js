const joi = require("./joi");

module.exports = {
  create: {
    body: joi.object({
      username: joi.string().required(),
      email: joi.string().required(),
      bio: joi.string().optional(),
    }).required()
  },
};
