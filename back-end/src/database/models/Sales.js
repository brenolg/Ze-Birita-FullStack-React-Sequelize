module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    totalPrice: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    deliveryAddres: { type: DataTypes.STRING(100), allowNull: false },
    deliveryNumber: { type: DataTypes.STRING(50), allowNull: false },
    status: { type: DataTypes.STRING(50), allowNull: false },
    
  }, {
    createdAt: 'sale_date',
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = (models) => {
    models.Sale.belongsToMany(models.User, { foreignKey: 'userId', as: 'user' });
    models.Sale.belongsToMany(models.User, { foreignKey: 'sellerId', as: 'seller' });
    
  };
  return Sale;
}