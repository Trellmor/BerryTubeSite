/*

	Importer Object

*/

events = require('events');

module.exports = function(bt,Video){

	var importer = new events.EventEmitter;
	importer.processors = [];

	// We need to now import all video processors
	require("fs").readdirSync("./bt_data/importers").forEach(function(file) {
		if(file.substring(file.length-3) == ".js"){
			importer.processors.push(require("./importers/" + file)(bt,Video));
		}
	});

	importer.getVideo = function(url, callback){
		for(var i in importer.processors){
			var luckyBastard = importer.processors[i];
			for(var j in luckyBastard.matches){
				//console.log("trying",luckyBastard.matches[j]);
				var m = new RegExp(luckyBastard.matches[j],'i');
				if(m.test(url)){
					//console.log("Matched!",luckyBastard.name);
					luckyBastard.getVideo(url,function(err,video){
						//console.log("Retrieved!",video);
						if(callback)callback(video);
					});
					return;
				}
			}
		}
		if(callback)callback(null);
	}

	

	//playlist.load(db);
	//console.log(importer);
	return importer;

};
