const db = require ('../config/connection')
const Sequelize = require('sequelize');

const Subscription = db.define('subscription', {
  subscription_Id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true
  },
  userId:{
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: false  
  },
  status:{
    type: Sequelize.BOOLEAN
  }
},{

});

module.exports = Subscription;

