let router = require('express').Router()
let loginUser = require('../actions/getUsersAction')
let createUser = require('../actions/createUsersAction')

router.get('/login/:email', loginUser)
router.post('/', createUser)

module.exports = router
