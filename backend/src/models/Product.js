'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    VendorId: DataTypes.INTEGER,
    Category:DataTypes.STRING,
    Name:DataTypes.STRING,
    Price:DataTypes.INTEGER,
    Detail:DataTypes.STRING,
    Date:DataTypes.DATE,
    Expire:DataTypes.DATE,
    timeType:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};