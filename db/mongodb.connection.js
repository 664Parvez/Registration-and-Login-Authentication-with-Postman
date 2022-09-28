require('dotenv').config()
const mongoose = require('mongoose')

DB_CONNECT = process.env.DB_CONNECT

mongoose.connect(DB_CONNECT)
.then (() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err)
    process.exit(1)
})