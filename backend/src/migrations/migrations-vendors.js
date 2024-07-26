'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendors', {
        // name: DataTypes.STRING,
        // taxnumber: DataTypes.STRING,
        // gmail: DataTypes.STRING,
        // contact: DataTypes.INTEGER

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Taxnumber: {
        type: Sequelize.INTEGER
      },
      Gmail: {
        type: Sequelize.STRING
      },
      Contact: {
        type: Sequelize.INTEGER
      },




      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendors');
  }
};