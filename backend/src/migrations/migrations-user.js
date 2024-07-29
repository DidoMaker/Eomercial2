'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      // Username:DataTypes.STRING,
      // Password:DataTypes.String,
      // firstName: DataTypes.STRING,
      // lastName: DataTypes.STRING,
      // Contact: DataTypes.INTEGER,
      // email: DataTypes.STRING,
      // gender:DataTypes.BOOLEANS

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Contact: {
        type: Sequelize.INTEGER
      },
      Gender: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Users');
  }
};