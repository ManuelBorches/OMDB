const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msj: "must be a valid email adress"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING
    }
}, {sequelize, modelName: 'User'})


User.prototype.hash = function(password, salt) {
    return bcrypt.hash(password, salt)
}

User.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt)
      })
      .then((hash) => {
        user.password = hash;
      });
});

module.exports = User;