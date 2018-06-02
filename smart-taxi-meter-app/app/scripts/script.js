'use strict'

// We create taxiApp module in script.js
var taxiApp = angular.module('taxiApp', []);

var taxiForm = document.getElementById('taxi-form');
var fnameInput = document.getElementById('fname-input');
var lnameInput = document.getElementById('lname-input');
var emailInput = document.getElementById('email-input');
var mileageInput = document.getElementById('mileage-input');
var ridersTbody = document.getElementById('riders-tbody');
var outputP = document.getElementById('output-p');

taxiApp.controller('mainController', function($scope, $http){
	var getRiders = function(){
//Retrieve riders data from server.'/riderList' is the route we'll get data from
		$http.get('riderList').then(function(response){
			$scope.riders = response.data;
			})
}
getRiders();

taxiForm.addEventListener('submit', function(){
	event.preventDefault();
	function Rider (fname, lname, email, mileage, cost) {
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mileage = mileage;
		this.cost = cost;
	}
	var newRider = new Rider(fnameInput.value, lnameInput.value, emailInput.value, mileageInput.value, mileageInput.value*2);
	
	$http.post('/riderList', newRider).then(function(response) {
		console.log(newRider);
	});
	getRiders();
	outputP.innerHTML = 'This ride costs you $'+mileageInput.value*2 + '.';

	// After taking data from input, we assign empty string to them to 
	// make input field clear or clean.
	
		fnameInput.value = '';
		lnameInput.value = '';
		emailInput.value = '';
		mileageInput.value = '';
});

$scope.deleteRider= function(id){
	console.log(id);
	$http.delete('/riderList/' + id).then(function(response){
		getRiders();
	});
}
});