var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongojs')

var app = express();
app.use(bodyParser.json());
app.use(cors());

var db = mongo('birds');
var sightings = db.collection("sightings")
var port = 3000;


app.post('/api/sighting', function(req, res) {

  sightings.insert(req.body, function(err, result){
  if(err){
    res.status(500).send(err)
  }
  res.send(result);
  })

});

app.get('/api/sighting', function(req, res) {
 sightings.find(req.query, function(err, result){
   if(err)res.send(err)
   res.send(result)
 })
});

app.delete('/api/sighting', function(req, res) {
sightings.remove({_id: mongo.ObjectId(req.query.id)}, function(err, result){
  if(err)res.send(err)
  res.send(result)
})
});

app.put('/api/sighting', function(req, res) {
sightings.update({_id: mongo.ObjectId(req.query.id)}, req.body, function(err, result){
if(err)res.send(err)
res.send(result)
});
})
app.listen(port, function() {
  console.log("Started server on port", port);
});
