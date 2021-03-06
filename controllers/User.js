const User = require('../models/User')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        User.findAll({
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
    createUser: (req, res) => {
        User.create(req.body)
        .then(result => {
            res.send({
                message: "Create One user success",
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
        updateProfile: async (req, res) => {
        await User.update(req.body,{
            where:{
                id_user: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: "update one profile success",
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
    deleteUser: async (req, res) => {
        await User. destroy({
            where: {
                id_user: req.params.id
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