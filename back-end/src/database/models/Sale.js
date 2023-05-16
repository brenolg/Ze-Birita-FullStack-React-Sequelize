module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {

    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false, 
    },

    userId: { 
      field: 'user_id',
      type: DataTypes.INTEGER, 
      allowNull: false,
      foreignKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      },
    },

    sellerId: { 
      field: 'seller_id', 
      type: DataTypes.INTEGER, 
      allowNull: false,
      foreignKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      }, 
    },

    totalPrice: { 
      type: DataTypes.DECIMAL(9, 2), 
      allowNull: false 
    },

    deliveryAddress: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },

    deliveryNumber: { 
      type: DataTypes.STRING(50), 
      allowNull: false 
    },

    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: { 
      type: DataTypes.STRING(50), 
      allowNull: false 
    },
    
  }, {
  
    updatedAt: false,
    createdAt: 'sale_date',
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = (models) => {

    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };
  
  return Sale;
}
