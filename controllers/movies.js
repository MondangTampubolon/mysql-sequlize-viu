const Movies = require('../models/movies')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        Movies.findAll({
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
    createMovie: (req, res) => {
        Movies.create(req.body)
        .then(result => {
            res.send({
                message: "Create One movie success",
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
    updateMovie: async (req, res) => {
        await Movies.update(req.body,{
            where:{
                id_movie: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: "update one movie success",
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "Internal server error",
                status: 500,
                result
            })
        })
    },
    deleteMovie: async (req, res) => {
        await Movies. destroy({
            where: {
                id_movie: req.params.id
            }
        })
        .then(result => {
            res.send ({
                message: 'deleted succesfully',
                status: 201,
                result
            })
        })
        .catch (error => {
            console.log(error)
            res.send({
                message: 'internal Server error',
                status: 500
            })
        })
    }
}