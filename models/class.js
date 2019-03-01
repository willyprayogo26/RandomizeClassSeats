'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    SchoolId: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    // associations can be defined here
    Class.belongsTo(models.School)
    Class.hasMany(models.User)
    Class.hasMany(models.Chair)
    // Class.belongsToMany(models.User, {through: models.History})
  };
  return Class;
};