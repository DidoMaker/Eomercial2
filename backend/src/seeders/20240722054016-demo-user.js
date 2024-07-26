'use strict';

module.exports = {


  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admin', [{
      username:'admin',
      password: '123456',
      firstName: 'Le Truong',
      lastName: 'Giang',
      email: 'admin@gmail.com',
      contact: '0942564303',

      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
