"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Result.belongsTo(models.Location);
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
      temp: DataTypes.STRING,
      trubidity: DataTypes.STRING,
      depth: DataTypes.STRING,
      coliform: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Result",
      tableName: "results",
    }
  );
  return Result;
};
