module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 1,
        seller_id: 2,
        total_price: 10.50,
        delivery_address: 'Rua dos Devs',
        delivery_number: 'Apto. 1337',
        status: 'finalizada'
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 30.50,
        delivery_address: 'Rua Back End',
        delivery_number: 'Apto. 16',
        status: 'finalizada'
      },
      {
        id: 3,
        user_id: 1,
        seller_id: 2,
        total_price: 15.30,
        delivery_address: 'Rua dos Devs',
        delivery_number: 'Apto. 1337',
        status: 'finalizada'
      },
    ], {});
    
      },
    
      async down (queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('sales', null, {});
      }
};
