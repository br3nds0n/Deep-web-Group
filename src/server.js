const App = require('./app');
require('dotenv').config();
const port = process.env.PORT; 

App.listen(port || 3000, () => {
	console.log(`Server is running on port ${port}`);
});