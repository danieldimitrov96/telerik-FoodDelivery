'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Food', [{
        id: 1,
        name: 'Potage',
        price: 3.50,
        weight: 250.00,
        imgUrl: './../../static/images/product1_big.jpg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Ginger soup',
        price: 5.50,
        weight: 250.00,
        imgUrl: './../../static/images/product2_big.jpg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        price: 6.50,
        name: 'Fresh salad',
        weight: 200.00,
        imgUrl: './../../static/images/product3_big.jpg',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Tea',
        price: 1.50,
        weight: 300.00,
        imgUrl: './../../static/images/product4_big.jpg',
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Cookies',
        price: 4.50,
        weight: 150.00,
        imgUrl: './../../static/images/product5_big.jpg',
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Vegetariana',
        price: 7.50,
        weight: 450.00,
        imgUrl: './../../static/images/product6_big.jpg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Food', null, {});
  },
};
