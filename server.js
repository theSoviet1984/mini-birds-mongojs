//npm init
//npm install express body-parser cors mongojs --save
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());

var nodePort = 3000;

//How to connect to database:

//Run mongod
//var db = mongoJS('birds', ['sightings']);
var db = mongojs('birds', ['sightings']);

app.post('/api/sighting', function(req, res){
	db.sightings.insert(req.body, function(err, result){
		if(err){ 
			return res.status(500).json(err);
		}
		else{
			return res.json(result);
		} 
	});
})
app.get('/api/sighting', function(req, res){
	//db.sightings.find();
	console.log('get hit');
	res.end();
})
app.delete('/api/sighting', function(req, res){
	//db.sightings.remove();
	console.log('delete hit');
	res.end();
})
app.put('/api/sighting', function(req, res){
	//db.sightings.findAndModify();
	console.log('put hit');
	res.end();
})


app.listen(nodePort, function(){
	
});

