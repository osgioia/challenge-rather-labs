const schemas = require("./schemas");

const validate = (reqModel) => (req, res, next) => {
  const partsOfRequest = Object.entries(reqModel);
  for (const partOfRequest of partsOfRequest) {
    const [key, schema] = partOfRequest;
    const { value, error } = schema.validate(req[key]);
    if (error) return next(error);
    req.locals = {
      ...req.locals,
      sanitized: {
        ...(req.locals && req.locals.sanitized),
        [key]: value,
      },
    };
  }
  return next();
};

module.exports = {
  validate,
  schemas
};
