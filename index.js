const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

// router
const userRouter = require('./routes/User')
const moviesRouter = require('./routes/movies')

// models
const User = require('./models/User')
const Movies = require('./models/movies')
const Subscription = require('./models/subscription')
const HistoryWatch = require('./models/history_watch')


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// sequelize up connection
db
.authenticate()
.then(()=> {
    console.log('Database Sequelize connected...')
})
.then(()=> {
    User.sync().then(()=> console.log('Table created'))
    Movies.sync().then(()=> console.log('Table created'))
    Subscription.sync().then(()=> console.log('Table created'))
    HistoryWatch.sync().then(()=> console.log('Table created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter )
app.use('/', moviesRouter )

app.listen(4000, ()=> {
    console.log('Server is running...')
})