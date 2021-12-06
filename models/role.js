"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: "user_roles",
      });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
      },
      isUser: {
        type: DataTypes.BOOLEAN,
      },
      isModerator: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "roles",
    }
  );
  return Role;
};
