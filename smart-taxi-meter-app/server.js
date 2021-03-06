var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('taxidb', ['taxidb']);
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/'));

app.get('/riderList', function(request, response){
db.taxidb.find(function(error, docs){
		console.log(docs);
		response.json(docs);
	})

console.log('server received GET request');
})

app.post('/riderList', function(request, response){
	console.log(request.body);
	db.taxidb.insert(request.body, function(error, docs){
		response.json(docs);
	});
});

app.delete('/riderList/:id', function (request, response) {
    var id = request.params.id; // gets the value of the id from the url
    console.log(id);
    db.taxidb.remove({_id: mongojs.ObjectId(id)}, function (error, document) {
        response.json(document);
    });
});


app.listen(port, function(){
 	console.log('server starting on http://localhost:' + port);
})