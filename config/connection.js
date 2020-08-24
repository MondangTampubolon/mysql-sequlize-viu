const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'viu',
    username:'root',
    password:'rootroot'
})

module.exports = db