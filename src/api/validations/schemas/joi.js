const ERROR = require("http-errors");
const Joi = require("joi");

const joi = Joi.defaults((schema) => {
  const custom = schema.error((error) => {
    if (error[0] && error[0].isJoiError) return error;
    const label = error[0].path && error[0].path[0];
    return ERROR(400, `INVALID_${label ? label.toUpperCase() : label || "REQUEST"}`, { isJoiError: true });
  });
  custom.prefs({
    abortEarly: true,
    allowUnknown: false,
    errors: {
      render: false
    }
  });
  return custom;
});

module.exports = joi;
