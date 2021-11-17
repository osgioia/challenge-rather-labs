const User = require("./user");

module.exports = (dependencies) => {
  const user = User(dependencies);

  return ({
    user
  });
};
