'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chair = sequelize.define('Chair', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ClassId: DataTypes.INTEGER
  }, {});
  Chair.associate = function(models) {
    // associations can be defined here
    Chair.belongsToMany(models.User, {through: models.History})
    Chair.belongsTo(models.Class)
  };
  return Chair;
};