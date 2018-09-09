let router = require('express').Router()
let getNotes = require('../actions/getNotes')
let createNotes = require('../actions/createNotes')

router.get('/notes/:email', getNotes)
router.post('/', createNotes)

module.exports = router
