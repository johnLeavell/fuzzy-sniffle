"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate(models) {
      Result.belongsTo(models.Location, {
        foreignKey: "locationId",
        as: "location",
      });
    }
  }

  Result.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      temp: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      trubidity: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      depth: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      coliform: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Result",
      tableName: "results",
    }
  );
  return Result;
};
