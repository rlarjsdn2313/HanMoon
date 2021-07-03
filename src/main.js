const fs = require('fs');

const express = require('express');
const app = express();

const checkId = require('./lib/checkId').checkId;
const readData = require('./lib/readData').readData;

const port = 3000;
const data_path = './data/'

app.get('/', (req, res) => {
	res.send('hello');
});


app.get('/getdata/:dataId/', (req, res) => {
	if (!checkId(data_path, req.params.dataId)) {
		res.send({
			"data": "error"
		});
		return;
	}
	
	res.send(readData(data_path, req.params.dataId));
});


app.get('/getversion/', (req, res) => {
	res.send(readData(data_path, 'version'));
});


app.listen(port, () => {
	console.log(`server is running...(port:${port})`);
});