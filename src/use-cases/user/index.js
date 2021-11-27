const GetAll = require("./get-all");
const Get = require("./get");
const Create = require("./create");

module.exports = (dependencies) => ({
  getAll: GetAll(dependencies),
  get: Get(dependencies),
  create: Create(dependencies),
});
