const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

module.exports = (sequelize) => {
  const User = sequelize.define("User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "users",
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ["email"],
          where: {
            email: {
              [Sequelize.Op.ne]: null
            }
          },
        },
        {
          unique: true,
          fields: ["username"],
        },
      ],
    });
  
  return User;
};
