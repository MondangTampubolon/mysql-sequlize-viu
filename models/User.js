const db = require('../config/connection')
const Sequelize = require('sequelize');
const Subscription = require('./subscription');


const User = db.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING(64),
        validate: {
            is: ["^[0-9a-z]+$",'i'],
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // options

});
User.hasOne(Subscription, {
    foreignKey: 'userId'
});
Subscription.belongsTo(User, {
    foreignKey: 'userId',
    constraints: false
});



module.exports = User;