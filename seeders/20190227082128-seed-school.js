'use strict';
const fs = require('fs')

let data_school = JSON.parse(fs.readFileSync('./data-for-seed/school.json', 'utf8'))

data_school.forEach(e => {
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
    return queryInterface.bulkInsert('Schools', data_school, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Schools', null, {});
  }
};
