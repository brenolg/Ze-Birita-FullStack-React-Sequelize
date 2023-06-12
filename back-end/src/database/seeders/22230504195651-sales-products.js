module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales_products', [{
        sale_id: 1,
        product_id: 2,
        quantity: 4,
      },
      {
        sale_id: 1,
        product_id: 24,
        quantity: 7,
      },
      {
        sale_id: 1,
        product_id: 27,
        quantity: 5,
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
      {
        sale_id: 4,
        product_id: 20,
        quantity: 5,
      },
      {
        sale_id: 4,
        product_id: 24,
        quantity: 7,
      },
      {
        sale_id: 5,
        product_id: 34,
        quantity: 7,
      },
      {
        sale_id: 5,
        product_id: 12,
        quantity: 7,
      },
      {
        sale_id: 5,
        product_id: 17,
        quantity: 7,
      },
      {
        sale_id: 6,
        product_id: 1,
        quantity: 7,
      },
      {
        sale_id: 6,
        product_id: 19,
        quantity: 5,
      },
      {
        sale_id: 6,
        product_id: 26,
        quantity: 5,
      },
      {
        sale_id: 6,
        product_id: 12,
        quantity: 9,
      },


    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  },
};
