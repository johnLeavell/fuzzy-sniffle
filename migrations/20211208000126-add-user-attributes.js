"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "users",
          "isAdmin",
          {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "users",
          "isUser",
          {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "users",
          "isModerator",
          {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("users", "isAdmin"),
        queryInterface.removeColumn("users", "isUser"),
        queryInterface.removeColumn("users", "isModerator"),
      ]);
    });
  },
};
