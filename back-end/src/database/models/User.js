module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: { type: DataTypes.STRING(32), allowNull: false },
    role: { type: DataTypes.STRING(20), allowNull: false , defaultValue: 'customer'},
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  // UserModel.associate = (models) => {
  //   UserModel.hasMany()
  // };
  return User;
};
