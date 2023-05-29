module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      //cervejas
      {
        id: 1,
        name: 'Skol 350ml',
        price: 3.20,
        url_image: 'http://localhost:3001/images/skoll_lata.jpg',
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
      },
      {
        id: 3,
        name: 'Antarctica Pilsen 300ml',
        price: 2.49,
        url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
      },
      {
        id: 4,
        name: 'Brahma 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
      },
      {
        id: 5,
        name: 'Skol 269ml',
        price: 2.19,
        url_image: 'http://localhost:3001/images/skol_269ml.jpg',
      },
      {
        id: 6,
        name: 'Skol Beats Senses 313ml',
        price: 4.49,
        url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
      },
      {
        id: 7,
        name: 'Becks 330ml',
        price: 4.99,
        url_image: 'http://localhost:3001/images/becks_330ml.jpg',
      },
      {
        id: 8,
        name: 'Brahma Duplo Malte 350ml',
        price: 2.79,
        url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
      },
      {
        id: 9,
        name: 'Becks 600ml',
        price: 8.89,
        url_image: 'http://localhost:3001/images/becks_600ml.jpg',
      },
      {
        id: 10,
        name: 'Skol Beats Senses 269ml',
        price: 3.57,
        url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
      },
      {
        id: 11,
        name: 'Brahma Zero Álcool 0,0% 350ml',
        price: 3.63,
        url_image: 'http://localhost:3001/images/brahma_zero.jpg',
      },
      {
        id: 12,
        name: 'Stella Artois 275ml',
        price: 3.49,
        url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg',
      },
       //vinhos
      {
        id: 13,
        name: 'Sangue de Boi Tinto Suave 4l',
        price: 74.59,
        url_image: 'http://localhost:3001/images/sangue_boi_4l.jpg',
      },
      {
        id: 14,
        name: 'Almaúnica PREMIUM SAFRA 2020 Tinto Seco 750ml',
        price: 212.51,
        url_image: 'http://localhost:3001/images/ALMAÚNICA_750ML.jpg',
      },
      {
        id: 15,
        name: 'Vinho Casa Madeira Licoroso 500ml',
        price: 35.71,
        url_image: 'http://localhost:3001/images/licoroso_chardonnay_500ml.jpg',
      },
      {
        id: 16,
        name: 'Vinho Salton Gerações Tinto Seco 750ml',
        price: 21.51,
        url_image: 'http://localhost:3001/images/salton_tinto_750ml.jpg',
      },
      {
        id: 17,
        name: 'Vinho Casa Madeira Gastronômico Branco Seco 550ml',
        price: 36.71,
        url_image: 'http://localhost:3001/images/vinho_licoroso_casa.jpg',
      },
      {
        id: 18,
        name: 'Vinho Capella dos Campos Alvarinho Branco Seco 750ml',
        price: 68.91,
        url_image: 'http://localhost:3001/images/capella_dos_campos.jpg',
      },
      {
        id: 19,
        name: 'Garibaldi di Bartolo Tinto Suave 1,5LTS C/6',
        price: 156.31,
        url_image: 'http://localhost:3001/images/bartolo.jpg',
      },
      {
        id: 20,
        name: 'Del Grano Frisante Rosé Suave 750ml',
        price: 19.23,
        url_image: 'http://localhost:3001/images/del_grano.jpg',
      },
      {
        id: 21,
        name: 'Del Grano Frisante Branco Suave 750ml',
        price: 19.23,
        url_image: 'http://localhost:3001/images/frisante_branco_suave.jpg',
      },
      {
        id: 22,
        name: 'Vinho Garibaldi Relax Frisante Rosé Suave 750ml',
        price: 22.91,
        url_image: 'http://localhost:3001/images/rose_suave.jpg',
      },
      {
        id: 23,
        name: 'Vinho Aurora Saint Germain Frisante Tinto Suave 750ml',
        price: 22.91,
        url_image: 'http://localhost:3001/images/tinto_suave_6.jpg',
      },
      {
        id: 24,
        name: 'Vinho Garibaldi Precioso Licoroso Rosé Suave 750ml',
        price: 14.63,
        url_image: 'http://localhost:3001/images/suave_licoroso.jpg',
      },
      //destilados
      {
        id: 25,
        name: 'Whisky Jack Daniel'+ "'" + 's 1000 ml',
        price: 122.45,
        url_image: 'http://localhost:3001/images/jack.jpg',
      },
      {
        id: 26,
        name: 'Whisky Old Parr 12 anos 1000 ml',
        price: 122.45,
        url_image: 'http://localhost:3001/images/old_parr_650.jpg',
      },
      {
        id: 27,
        name: 'Whisky Johnnie Walker Red Label 750ml',
        price: 64.00,
        url_image: 'http://localhost:3001/images/red_label.jpg',
      },
      {
        id: 28,
        name: 'Whisky Buchanan' + "'" + 's 12 anos 1000 ml',
        price: 112.75,
        url_image: 'http://localhost:3001/images/buchanans.jpg',
      },
      {
        id: 29,
        name: 'Rum Bacardi Carta Ouro 980 ml',
        price: 47.25,
        url_image: 'http://localhost:3001/images/bacardi.jpg',
      },
      {
        id: 30,
        name: 'Rum Montilla Carta Ouro 1L',
        price: 29.00,
        url_image: 'http://localhost:3001/images/montilla.jpg',
      },
      {
        id: 31,
        name: 'Rum Havana Club Anejo 3 anos 700 ml',
        price: 66.66,
        url_image: 'http://localhost:3001/images/havana.jpg',
      },
      {
        id: 32,
        name: 'Kit Miniatura Absolut (5 X 50ml) - Kit Com 5',
        price: 122.20,
        url_image: 'http://localhost:3001/images/kit.jpg',
      },
      {
        id: 33,
        name: 'Vodka Absolut 1000 ml',
        price: 85.41,
        url_image: 'http://localhost:3001/images/absolut.jpg',
      },
      {
        id: 34,
        name: 'Gin Bombay Sapphire Dry London 750 ml',
        price: 85.47,
        url_image: 'http://localhost:3001/images/bombay.jpg',
      },
      {
        id: 35,
        name: 'Whisky Jim Beam Original Bourbon 1000 ml',
        price: 94.98,
        url_image: 'http://localhost:3001/images/jim.jpeg',
      },
      {
        id: 36,
        name: 'Conhaque Presidente 900 ml',
        price: 24.12,
        url_image: 'http://localhost:3001/images/president.jpg',
      },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
