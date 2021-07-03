let fs = require('fs');

let readData = function(path, id) {
	let file = fs.readFileSync(`${path}${id}.json`);
	let data = JSON.parse(file);
	return data;
}

module.exports.readData = readData;