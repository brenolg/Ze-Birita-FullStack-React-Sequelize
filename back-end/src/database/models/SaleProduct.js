module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {

    saleId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      foreignKey: true,
      field: 'sale_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'sales',
        key: 'id',
      },
    },

    productId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      foreignKey: true,
      allowNull: false,
      field: 'product_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'products',
        key: 'id',
      },
    },
    
    quantity: { 
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SaleProduct.associate = (models) => {

    models.Sale.belongsToMany(models.Product,
      { 
        as: 'products',
        through: SaleProduct,
        foreignKey: 'saleId', 
        otherKey: 'productId'
      });

    models.Product.belongsToMany(models.Sale,
      { 
        as: 'sales',
        through: SaleProduct,
        foreignKey: 'productId', 
        otherKey: 'saleId'
      });
  }

  return SaleProduct;
};
