module.exports = ({
  database: { models: { User } },
}) => async (user) => {
  const newUser = await User.create(user);
  return newUser.toJSON();
};
