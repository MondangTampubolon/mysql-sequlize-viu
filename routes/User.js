const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createUser,
    updateProfile,
    deleteUser,
} = require('../controllers/User')

router.get('/users', getAll)
router.post('/users/add',createUser )
router.put('/users/update', updateProfile)
router.delete('/users/delete', deleteUser)

module.exports = router