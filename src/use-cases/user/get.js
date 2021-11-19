module.exports =
  ({
    database: {
      models: { User },
    },
  }) =>
  async (id) => {
    return await User.findOne({ where: { id: id } });
  };
