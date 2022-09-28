const path = require("path");

const homePath = path.join(__dirname, '../views/index.html')

const home = (req, res) => {
    res.sendFile(homePath)
}

module.exports = home