const express = require('express')
const app = express()
const cors = require('cors')

// Mongodb Database connect
require('./db/mongodb.connection')

// From routes file
const registrationRouter = require('./routes/registration.route')
const loginRouter = require('./routes/login.route')

// From Controller file
const home = require('./controllers/home.controller')

// Cors Setup
app.use(cors())

// Express Middleware for data get from body 
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', home)

app.use(registrationRouter)
app.use(loginRouter)


app.use((req, res) => {
    res.send('404 Error, Page not found')
})


module.exports = app