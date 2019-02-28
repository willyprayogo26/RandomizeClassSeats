'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  const bcrypt = require('bcryptjs');
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    age: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Format bukan email...'
        },
        isUnique(value) {
          return User.findOne({where: {
            "email": value,
            "id": {
              [Op.ne]: this.id
              }
            }
          })
          .then(feedback => {
            if(feedback) {
              throw new Error('Email sudah terdaftar')
            }
          })
          .catch(err => {
            throw err
          })
        }
      }
    },
    role: DataTypes.STRING,
    dateBirth: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate: (data, options) => {
        let salt = bcrypt.genSaltSync(10);
        data.password = bcrypt.hashSync(data.password, salt);
      },
      beforeSave: (data, options) => {
        data.set('ClassId', data.ClassId || null)
        data.set('dateBirth', data.dateBirth || null)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Class)
    User.belongsToMany(models.Chair, {through: models.History})
  };

  return User;
};