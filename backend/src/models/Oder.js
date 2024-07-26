'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */a
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    userId:DataTypes.INTEGER,
    productId:DataTypes.INTEGER,
    oderDate:DataTypes.DATE,
    timeType:DataTypes.STRING,
    Address:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};