'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {

        // userId:DataTypes.STRING,
        // productId:DataTypes.STRING,
        // oderDate:DataTypes.DATE,
        // timeType:DataTypes.STRING,
        // Address:DataTypes.STRING

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.DATE
      },
      timeType: {
        type: Sequelize.STRING
        },
      address: {
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
    await queryInterface.dropTable('Orders');
  }
};