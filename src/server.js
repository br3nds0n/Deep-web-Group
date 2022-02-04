const App = require('./app.js')
require('dotenv').config()
const port = process.ENV.PORT 

App.listen(port || 3000, () => {
    console.log(`Server is running on port ${port}`)
})