module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {

    saleId: { type: DataTypes.INTEGER, primaryKey: true },

    productId: { type: DataTypes.INTEGER, primaryKey: true},
    
    quantity: { type: DataTypes.INTEGER },
    
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProduct.associate = (models) => {

    models.Sale.belongsToMany(models.Product,
      { 
        as: 'sale',
        through: SalesProduct,
        foreignKey: 'saleId', 
        otherKey: 'productId'
      });

    models.Product.belongsToMany(models.Sale,

      { 
        as: 'product',
        through: SalesProduct,
        foreignKey: 'productId', 
        otherKey: 'saleId'
      });
  }

  return SalesProduct;
};
