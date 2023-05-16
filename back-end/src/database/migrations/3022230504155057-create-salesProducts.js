
  module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }),
  
    down: (queryInterface, _Sequelize) => queryInterface.dropTable('sales_products'),
  };
