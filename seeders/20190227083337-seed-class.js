'use strict';
const fs = require('fs')

let data_class = JSON.parse(fs.readFileSync('./data-for-seed/class.json', 'utf8'))

data_class.forEach(e => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Classes', data_class, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Classes', null, {});
  }
};
