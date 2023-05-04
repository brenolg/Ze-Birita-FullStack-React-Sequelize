module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: { type: DataTypes.INTEGER },
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sales,
      { 
        foreignKey: 'productId', 
        as: 'products',
        through: SalesProduct,
        otherKey: 'saleId'
      });
    models.Sale.belongsToMany(models.Products,
      { 
        foreignKey: 'saleId', 
        as: 'sales',
        through: SalesProduct,
        otherKey: 'productId'
      });
  }

  return SalesProduct;
};