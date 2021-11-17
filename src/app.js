/* eslint-disable no-console */

const assert = require("assert");
assert(process.env.NODE_ENV, "Env var NODE_ENV must be set when running the app");

const config = require("./config");
const resolveDependenciesAndLoadApp = require("./loader");

const app = async (config) => {
  const { API: { PORT, HOST } } = config;

  const { api } = await resolveDependenciesAndLoadApp(config);
  await api.listen(PORT, HOST);
};

console.time(`API | PORT #${config.API.PORT} | BOOT TIME`);
app(config)
  .then(() => {
    console.timeEnd(`API | PORT #${config.API.PORT} | BOOT TIME`);
  });

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
