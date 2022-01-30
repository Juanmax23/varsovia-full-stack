const { DataTypes, Model } = require('sequelize');
const sequelize = require('../infrastructure/db');

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.STRING,
    allowNull: true
  },
  offer: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img:{
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  sequelize, 
  modelName: 'Product',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  tableName: 'products'
});

module.exports = Product;
