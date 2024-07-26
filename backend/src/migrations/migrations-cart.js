'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart', {

        // userId:DataTypes.INTEGER,
        // vendorId:DataTypes.INTEGER,
        // productId:DataTypes.INTEGER

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      vendorId: {
        type: Sequelize.INTEGER
      },
      protductId: {
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
    await queryInterface.dropTable('cart');
  }
};