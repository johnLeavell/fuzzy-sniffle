"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("locations", [
      {
        id: "db49080a-c1d6-42e0-b0f3-7667bf4fdd1f",
        name: "Upper Branch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "87224c5b-075d-4a43-9518-eeed0edbf5cd",
        name: "Lower Branch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2c680ecb-8e7d-43e0-84ca-a11ee28f22ac",
        name: "Middle Branch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
