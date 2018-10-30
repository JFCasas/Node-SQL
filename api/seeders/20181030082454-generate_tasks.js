'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      
      return queryInterface.bulkInsert('tasks', [
        {id:1,description: 'Primera descripción',createdAt: new Date(), updatedAt: new Date()},
        {id:2,description: 'Segunda descripción',createdAt: new Date(), updatedAt: new Date()},
        {id:3,description: 'Tercera descripción',createdAt: new Date(), updatedAt: new Date()},

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      return queryInterface.bulkDelete('tasks', null, {});
    
  }
};
