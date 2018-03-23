'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Food', [{
        id: 1,
        name: 'Potage',
        price: 3.50,
        weight: 250.00,
        // remove _big.jpg from every imgUrl
        imgUrl: './../../static/images/product1',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Ginger soup',
        price: 5.50,
        weight: 250.00,
        imgUrl: './../../static/images/product2',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        price: 6.50,
        name: 'Fresh salad',
        weight: 200.00,
        imgUrl: './../../static/images/product3',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Tea',
        price: 1.50,
        weight: 300.00,
        imgUrl: './../../static/images/product4',
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Cookies',
        price: 4.50,
        weight: 150.00,
        imgUrl: './../../static/images/product5',
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Vegetariana',
        price: 7.50,
        weight: 450.00,
        imgUrl: './../../static/images/product6',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Pappardelle',
        price: 11.50,
        weight: 480.00,
        imgUrl: './../../static/images/product7',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Lasagna',
        price: 17.50,
        weight: 250.00,
        imgUrl: './../../static/images/product8',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Food', null, {});
  },
};
