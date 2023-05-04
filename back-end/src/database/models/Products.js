module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    name: { type: DataTypes.STRING(100), allowNull: false },

    price: { type: DataTypes.DECIMAL(4, 2), allowNull: false },

    urlImage: { type: DataTypes.STRING(200), allowNull: false },

  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'productId', as: 'sales_products' })
  }

  return Product;
};
