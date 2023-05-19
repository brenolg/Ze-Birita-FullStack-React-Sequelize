module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
        allowNull: false,
      },

      deliveryAddress: {
        type: Sequelize.STRING,
        field: 'delivery_address',
      },

      deliveryNumber: {
        type: Sequelize.STRING,
        field: 'delivery_number',
      },

      saleDate: {
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      
      status: {
        type: Sequelize.STRING,
        field: 'status',
        defaultValue: 'Pendente',
      },
    });
  },
   down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('sales');
  }
};
