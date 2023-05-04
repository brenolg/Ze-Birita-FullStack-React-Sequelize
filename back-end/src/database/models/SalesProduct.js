module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, foreign: true },
    productId: { type: DataTypes.INTEGER, foreign: true },
    quantity: { type: DataTypes.INTEGER },
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale,
      { 
        foreignKey: 'productId', 
        as: 'product',
        through: SalesProduct,
        otherKey: 'saleId'
      });
    models.Sale.belongsToMany(models.Product,
      { 
        foreignKey: 'saleId', 
        as: 'sale',
        through: SalesProduct,
        otherKey: 'productId'
      });
  }

  return SalesProduct;
};