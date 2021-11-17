/* eslint-disable no-console */
module.exports = ({ WORKER_NAME }) => ({
  info: console.log.bind(this, `[WORKER ${WORKER_NAME}] `),
  warn: console.warn.bind(this, `[WORKER ${WORKER_NAME}] `),
  error: console.error.bind(this, `[WORKER ${WORKER_NAME}] `),
});
