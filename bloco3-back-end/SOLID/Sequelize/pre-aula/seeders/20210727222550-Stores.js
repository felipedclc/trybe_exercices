'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Stores", [
      {
        name: 'Magalu',
        description: 'Loja que tem eletros.'
      }, 
      {
        name: 'Centauro',
        description: 'Loja de produtos esportivos.'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Stores", null, {});
  }
};
