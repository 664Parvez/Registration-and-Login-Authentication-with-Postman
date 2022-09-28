const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    username : {
        type: String
    },
    email : {
        type: String
    },
    password : {
        type: String
    },
    create_on : {
        type : Date,
        default : Date.now
    }
    
})

const Register = new mongoose.model('register', registerSchema)

module.exports = Register


