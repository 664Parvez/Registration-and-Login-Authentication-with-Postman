const path = require('path')
const Register = require('../models/registration.model')

const regPath = path.join(__dirname, '../views/register.html')

const getRegistration = (req, res) => {
    res.sendFile(regPath)
}

const postRegistration = async (req, res) => { 

    try{
        const newRegister = new Register( req.body )
        await newRegister.save()
        res.status(200).json(newRegister)
    }catch(err) {
        res.status(500).json(err)
    }

}

module.exports = { getRegistration, postRegistration }