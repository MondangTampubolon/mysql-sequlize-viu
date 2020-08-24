const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createHistoryWatch,
    deleteHistoryWatch
  } = require('../controllers/history_watch')

router.get('/history_watch', getAll)
router.post('/history_watch/create',createHistoryWatch )
router.delete('/history_watch/delete', deleteHistoryWatch)

module.exports = router