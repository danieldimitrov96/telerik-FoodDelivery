'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        id: 1,
        name: 'John Doe',
        phone: '0894455566',
        email: 'JohnDoe@gmail.com',
        password: '12345',
        adress: 'Sofia, Mladost',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
