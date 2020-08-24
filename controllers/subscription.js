const Subscription = require('../models/subscription')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        Subscription.findAll({
            raw: true
        })
        .then(result => {
            res.send({
                message: 'Get All data',
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'internal server error',
                status: 500,
            })
        })
    },
    createSubscription: (req, res) => {
        Subscription.create(req.body)
        .then(result => {
            res.send({
                message: "Create One subscription success",
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "Internal server error",
                status: 500
            })
        })
    }
}