module.exports =
  ({
    database: {
      models: { User },
    },
  }) =>
    async (id) => await User.findOne({ where: { id: id } });
