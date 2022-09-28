const express = require('express')
const router = express()

const { getLogin, postLogin } = require('../controllers/login.controller')

router.get('/login', getLogin)

router.post('/login', postLogin)

module.exports = router