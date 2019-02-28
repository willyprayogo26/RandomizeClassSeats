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
  return History;
};