module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false 
    },

    name: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },

    price: { 
      type: DataTypes.DECIMAL(4, 2), 
      allowNull: false,
    },

    urlImage: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  return Product;
};
