'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    static associate(models) {
    }
  }
  UserModel.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:  {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false,
    underscored: true
  });
  return UserModel;
};