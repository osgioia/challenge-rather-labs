module.exports =
  ({
    database: {
      models: { User },
    },
  }) =>
    async () => await User.findAll();
