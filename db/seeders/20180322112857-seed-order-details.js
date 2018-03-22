'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Orderdetails', [{
        id: 1,
        quantity: 2, 
        FoodId: 1,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: 2,
        quantity: 1, 
        FoodId: 3,
        OrderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        quantity: 2, 
        FoodId: 5,
        OrderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: 4,
        quantity: 3, 
        FoodId: 4,
        OrderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Orderdetails', null, {});
  }
};
