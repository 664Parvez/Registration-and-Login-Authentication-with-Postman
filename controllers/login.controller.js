const path = require('path')
const Register = require('../models/registration.model')

const loginPath = path.join(__dirname, '../views/login.html')

const getLogin = (req, res) => {
    res.sendFile(loginPath)
}

const postLogin = async (req, res) => {

    const { email, password } = req.body

    const loginModel = await Register.findOne({ email : email })
    
    if ( loginModel && loginModel.password === password ) {
        res.status(200).json({ message : 'Valid User' })
    }
    else {
        res.status(404).json({ message : "Invalid User" })
    }

    // res.json({ message : "Your Login data has send" })
}

module.exports = { getLogin, postLogin }