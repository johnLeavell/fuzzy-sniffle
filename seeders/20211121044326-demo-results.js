"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("results", [
      {
        id: "bb49080a-c1d6-42e0-b0f3-7667bf4fdd1f",
        temp: "98.3",
        trubidity: "34.5",
        depth: "3",
        coliform: "35",
        createdAt: new Date(),
        updatedAt: new Date(),
        locationId: "db49080a-c1d6-42e0-b0f3-7667bf4fdd1f",
      },
      {
        id: "db94080a-c1d6-42e0-b0f3-7667bf4fdd1f",
        temp: "94.3",
        trubidity: "4.5",
        depth: "3",
        coliform: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        locationId: "2c680ecb-8e7d-43e0-84ca-a11ee28f22ac",
      },
      {
        id: "db49008a-c1d6-42e0-b0f3-7667bf4fdd1f",
        temp: "99.3",
        trubidity: "35",
        depth: "3",
        coliform: "30",
        createdAt: new Date(),
        updatedAt: new Date(),
        locationId: "87224c5b-075d-4a43-9518-eeed0edbf5cd",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("results", null, {});
  },
};
