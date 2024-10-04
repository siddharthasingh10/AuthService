'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *  */
      await queryInterface.bulkInsert('Role', [
        {
            name:"ADMIN"
        },
        {
            name:"CUSTOMER"
        },
        {
            name:"AIRLINE_BUSINESS"
        }
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
