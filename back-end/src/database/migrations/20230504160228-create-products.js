module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      price: {
        allowNull: true,
        type: Sequelize.DOUBLE(4, 2),
      },
      
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'url_image',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
