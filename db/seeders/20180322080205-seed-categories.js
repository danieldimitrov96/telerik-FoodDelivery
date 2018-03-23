'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', [{
        id: 1,
        name: 'Soups',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 2,
        name: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 3,
        name: 'Pasta',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 4,
        name: 'Salads',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 5,
        name: 'Deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 6,
        name: 'Drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
  },
};
