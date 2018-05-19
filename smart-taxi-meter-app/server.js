var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('taxidb', ['taxidb']);

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app/'));

app.get('/riderList', function(request, response){
	
	/* Now server responds to GET with objects from db, so we commented out these objects.
	var ahmadFaras = {
	fname: 'Ahmad',
	lname: 'Faras',
	email: 'zubairfaras1@gmail.com',
	mileage: 2,
	cost: 2*2
};
var sunShayina = {
	fname: 'Sun',
	lname: 'Shayina',
	email: 'shayinamawezi@gmail.com',
	mileage: 4,
	cost: 4*2
};

var riderList = [ahmadFaras, sunShayina];
*/


db.taxidb.find(function(error, docs){
	//	console.log(docs);
	//
		response.json(docs);
	})

console.log('server received GET request');
//console.log(riderList);

 
})
app.listen(port, function(){
 	console.log('server starting on http://localhost:' + port);
})