"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Produks",
      [
        {
          name: "senar pancing",
          stok: 20,
          harga: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "joran",
          stok: 10,
          harga: 300000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "reel",
          stok: 10,
          harga: 90000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "kail ",
          stok: 3,
          harga: 60000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pelampung",
          stok: 10,
          harga: 70000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Produks", null, {});
  },
};
