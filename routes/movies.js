const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createMovie,
    updateMovie,
    deleteMovie
  } = require('../controllers/movies')

router.get('/movies', getAll)
router.post('/movies/add',createMovie )
router.put('movies/update', updateMovie)
router.delete('movies/delete', deleteMovie)

module.exports = router