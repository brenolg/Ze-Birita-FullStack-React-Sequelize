module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'ea1385f977a72230f33ee885053dc944', // --adM2@21!!--
        role: 'administrator'
      },
      //Token:
      //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY4MzQ3NTY5NCwiZXhwIjoxNjgzNTYyMDk0fQ.w52T0yE325ogRfLlrbX4bk6aPeeeKxikUmx_kNerqro
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: 'de25f2d8b3ebee022368a68c6311eade', // fulanA@123
        role: 'seller'
      },
      //Token:
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZnVsYW5hQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJzZWxsZXIifSwiaWF0IjoxNjgzNDc1NDc2LCJleHAiOjE2ODM1NjE4NzZ9.Y7zikv8Tg0sUFO0194W81wnAsApsV7VcD-50zPbm3hs
  
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55', // $#zebiritA1#$
        role: 'customer'
      }, 
      // Token:
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY4MzQ3NTU4MiwiZXhwIjoxNjgzNTYxOTgyfQ.IRbKKB7kpCiuMvvPdw4U25-x1yRItNQK73kCCSvVQcI
    ], {});

  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
