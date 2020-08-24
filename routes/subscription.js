const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createSubscription
} = require('../controllers/Subscription')

router.get('/subscription', getAll)
router.post('/subscription/add', createSubscription )

module.exports = router