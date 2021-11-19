module.exports =
  ({
    database: {
      models: { User },
    },
  }) =>
  async () => {
    return await User.findAll();
  };
