'use strict'

var taxiForm = document.getElementById('taxi-form');
var fnameInput = document.getElementById('fname-input');
var lnameInput = document.getElementById('lname-input');
var emailInput = document.getElementById('email-input');
var mileageInput = document.getElementById('mileage-input');
var cost1Table = document.getElementById('cost1-table');
var mile1Table = document.getElementById('mile1-table');
var mile2Table = document.getElementById('mile2-table');
var cost2Table = document.getElementById('cost2-table').innerHTML = mile2Table.value;
var outputP = document.getElementById('output-p')

taxiForm.addEventListener('submit', function(){
	event.preventDefault();

	outputP.innerHTML = 'This ride costs you $' + mileageInput.value * 2;
	cost1Table.innerHTML = mileageInput.value * 2;
	//cost2Table.innerHTML = mile2Table * 2;
});

