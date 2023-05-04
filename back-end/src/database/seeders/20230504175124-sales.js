'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        userId: 1,
        sellerId: 2,
        totalPrice: 10.50,
        deliveryAddress: 'Rua dos Devs',
        deliveryNumber: 'Apto. 1337',
        status: 'finalizada'
      },
      {
        userId: 3,
        sellerId: 2,
        totalPrice: 30.50,
        deliveryAddress: 'Rua Back End',
        deliveryNumber: 'Apto. 16',
        status: 'finalizada'
      },
      {
        userId: 1,
        sellerId: 2,
        totalPrice: 15.30,
        deliveryAddress: 'Rua dos Devs',
        deliveryNumber: 'Apto. 1337',
        status: 'finalizada'
      },
    ], {});
    
      },
    
      async down (queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('sales', null, {});
      }
};
