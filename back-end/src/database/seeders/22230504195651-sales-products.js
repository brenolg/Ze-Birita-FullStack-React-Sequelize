'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 2,
        quantity: 4,
      },

      {
        sale_id: 2,
        product_id: 1,
        quantity: 3,
      },

      {
        sale_id: 2,
        product_id: 2,
        quantity: 1,
      },

      {
        sale_id: 3,
        product_id: 2,
        quantity: 4,
      },

    ], {});
    
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});

  }
};
