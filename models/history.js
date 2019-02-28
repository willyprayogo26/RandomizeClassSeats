'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    date: DataTypes.DATE,
    ChairId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    ClassId: DataTypes.INTEGER
  }, {});
  History.associate = function(models) {
    // associations can be defined here
  };

  History.getRandomClass = function(input) {
    return History.findAll({
      where: {
          "createdAt": new Date().toLocaleDateString(),
          "ClassId": input
      },
      order: [['ChairId', 'ASC']]
    })
  }

  return History;
};