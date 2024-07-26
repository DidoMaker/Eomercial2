'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendors.init({
    name: DataTypes.STRING,
    taxnumber: DataTypes.STRING,
    gmail: DataTypes.STRING,
    contact: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendors',
  });
  return Vendors;
};