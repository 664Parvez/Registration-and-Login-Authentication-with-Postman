const express = require('express')
const router = express()

const { getRegistration, postRegistration } = require('../controllers/registration.controller')

// Get Method
router.get('/registration', getRegistration)


// Post Method
router.post('/registration', postRegistration)


module.exports = router