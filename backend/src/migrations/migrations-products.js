'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {

        // Vendor: DataTypes.INTEGER,
        // Category:DataTypes.STRING,
        // Name:DataTypes.STRING,
        // Price:DataTypes.INTEGER,
        // Detail:DataTypes.STRING,
        // Date:DataTypes.DATE,
        // Expire:DataTypes.DATE,
        // timeType:DataTypes.STRING

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VendorId: {
        type: Sequelize.INTEGER
      },
      Category: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Detail: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATE
      },
      Expire: {
        type: Sequelize.DATE
      },
      timeType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Products');
  }
};