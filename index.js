require('dotenv').config()
const app = require( './app.js' )
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})