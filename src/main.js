const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
	res.send('hello');
});


app.get('/getdata/', (req, res) => {
	
});


app.listen(port, () => {
	console.log(`server is running...(port:${port})`);
});