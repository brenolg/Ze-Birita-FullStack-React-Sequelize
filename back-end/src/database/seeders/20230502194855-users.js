'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('users', [
  {
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    password: 'ea1385f977a72230f33ee885053dc944', // --adM2@21!!--
    role: 'administrator'
  },
  {
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: 'de25f2d8b3ebee022368a68c6311eade', // fulanA@123
    role: 'seller'
  },
  {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '3818e7f8b7cc1c6b42bd39a2e62d2e55', // $#zebiritA1#$
    role: 'customer'
  },
], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
