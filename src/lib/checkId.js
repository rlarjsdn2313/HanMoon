let fs = require('fs');

let checkId = function(path, id) {
	filelist = fs.readdirSync(path);
	for (let i=0;i<filelist.length;i++) {
		if (filelist[i] === `${id}.json`) {
			return true
		}
	}
	
	return false
}