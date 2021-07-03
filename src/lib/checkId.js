let fs = require('fs');

let checkId = function(path, id) {
	filelist = fs.readdirSync(path);
	console.log(filelist);
	
	for (let i=0; i<filelist.length; i++) {
		if (filelist[i] === 'version.json') {
			continue;
		}
		
		if (filelist[i] === `${id}.json`) {
			return true;
		}
	}
	
	return false;
}
	
module.exports.checkId = checkId;