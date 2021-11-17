module.exports = class ApplicationError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
};
