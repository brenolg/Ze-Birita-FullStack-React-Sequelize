module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: 'ea1385f977a72230f33ee885053dc944', // --adM2@21!!--
      role: 'administrator',
    },
    // Token:
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY4NDE3NDU4NCwiZXhwIjoxNjg1NDcwNTg0fQ.RaJ1DsFdI1q5Ek8IToR2tnA6jTTvZht9ky4vmKWDYFY
    {
      id: 2,
      name: 'E-commerce',
      email: 'ecommerce@deliveryapp.com',
      password: 'de25f2d8b3ebee022368a68c6311eade', 
      role: 'seller',
    },
    {
        id: 3,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: 'de25f2d8b3ebee022368a68c6311eade', // fulanA@123
        role: 'seller',
      },
      // Token:
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZnVsYW5hQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJzZWxsZXIifSwiaWF0IjoxNjg0MTc0NjkwLCJleHAiOjE2ODU0NzA2OTB9.nQPsfRCw9cePYLdVpoxhL_0S-Cu79f3qaMWsREEV_sY
  
      {
        id: 4,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55', // $#zebiritA1#$
        role: 'customer',
      }, 
      // Token:
      // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY4NDE3NDcyNSwiZXhwIjoxNjg1NDcwNzI1fQ.VE8ilUvAVI3h9XNsQYnL_1d-YfME4A5MTqIcCVhC1jw
      {
        id: 5,
        name: 'Cliente Zé Pinga',
        email: 'zebiritaZ@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55',
        role: 'customer',
      }, 

      {
        id: 6,
        name: 'Cliente Montilla Ouro',
        email: 'zebiritaM@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55',
        role: 'customer',
      }, 

      {
        id: 7,
        name: 'Cliente Zé Campari',
        email: 'zebiritaC@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55',
        role: 'customer',
      }, 

      {
        id: 8,
        name: 'Cliente Kislla',
        email: 'zebiritaK@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55',
        role: 'customer',
      },

      {
        id: 9,
        name: 'Cliente Sangue de Boi',
        email: 'zebiritaBK@email.com',
        password: '3818e7f8b7cc1c6b42bd39a2e62d2e55',
        role: 'customer',
      },

      {
        id: 10,
        name: 'Fulana Silva',
        email: 'fulanaS@deliveryapp.com',
        password: 'de25f2d8b3ebee022368a68c6311eade',
        role: 'seller',
      },

      {
        id: 11,
        name: 'Fulana Fonseca',
        email: 'fulanaF@deliveryapp.com',
        password: 'de25f2d8b3ebee022368a68c6311eade',
        role: 'seller',
      },

      {
        id: 12,
        name: 'Fulana Xavier',
        email: 'fulanaX@deliveryapp.com',
        password: 'de25f2d8b3ebee022368a68c6311eade',
        role: 'seller',
      },
    
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
