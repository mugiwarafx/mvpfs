const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Product extends Model {}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productSellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productAmountAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productUploadedAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'product',
  }
)

module.exports = Product
