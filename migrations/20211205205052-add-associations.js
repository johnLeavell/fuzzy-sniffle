'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'user_roles',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        userId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        roleId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_roles');
  }
};
