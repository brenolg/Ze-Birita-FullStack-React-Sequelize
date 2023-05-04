'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        saleId: 1,
        productId: 2,
        quantity: 4,
      },
      {
        saleId: 2,
        productId: 1,
        quantity: 3,
      },
      {
        saleId: 2,
        productId: 2,
        quantity: 1,
      },
      {
        saleId: 3,
        productId: 2,
        quantity: 4,
      },
    ], {});
    
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});

  }
};
