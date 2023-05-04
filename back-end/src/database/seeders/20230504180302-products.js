'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: '51',
        price: 10.00,
        urlImage: 'sem URL',
      },
      {
        name: 'absolut',
        price: 20.00,
        urlImage: 'sem URL',
      },
    ], {});
    
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

  }
};
