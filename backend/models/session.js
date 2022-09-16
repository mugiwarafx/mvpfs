const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Session extends Model {}

Session.init(
  {
    sessionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sessionUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'user', key: 'userId' },
    },
    sessionValue: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'session',
  }
)

module.exports = Session
