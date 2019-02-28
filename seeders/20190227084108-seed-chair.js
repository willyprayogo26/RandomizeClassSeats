'use strict';
const fs = require('fs')

let data_chair = JSON.parse(fs.readFileSync('./data-for-seed/chair.json', 'utf8'))

let temp = []

data_chair.forEach(e => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
  temp.push(...Array(20).fill(e))
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
    return queryInterface.bulkInsert('Chairs', temp, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Chairs', null, {});
  }
};
