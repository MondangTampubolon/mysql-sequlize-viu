const HistoryWatch = require('../models/history_watch')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        HistoryWatch.findAll({
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
    createHistoryWatch: (req, res) => {
        HistoryWatch.create(req.body)
        .then(result => {
            res.send({
                message: "Create One history success",
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
    },
    deleteHistoryWatch: async (req, res) => {
        await HistoryWatch. destroy({
            where: {
                id_history: req.params.id
            }
        })
        .then(result => {
            res.send ({
                message: 'deleted succesfully',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'internal Server error',
                status: 500
            })
        })
    }
}