const db = require ('../config/connection')
const Sequelize = require('sequelize');
const User = require('./User');
const Subscription = require('./subscription');
const Movies = require('./movies');


const HistoryWatch = db.define('History_watch',{
  id_history:{
    type:Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true
  },
  id_movie:{
    type:Sequelize.INTEGER,
  },
  userId:{
    type:Sequelize.INTEGER,
  },
  subscription_Id:{
    type:Sequelize.INTEGER,
  }
},{
  // option
});
User.hasMany(HistoryWatch, {
  foreignKey: 'userId'
});
HistoryWatch.belongsTo(User, {
  foreignKey: 'userId',
  constraints: false
});

Subscription.hasMany(HistoryWatch, {
    foreignKey:'subscription_Id'
});
HistoryWatch.belongsTo(Subscription, {
  foreignKey: 'subscription_Id',
  constraints: false
});

Movies.hasMany(HistoryWatch, {
    foreignKey: 'id_movie'
});
HistoryWatch.belongsTo(Movies, {
  foreignKey: 'id_movie',
  constraints: false
});


module.exports = HistoryWatch;