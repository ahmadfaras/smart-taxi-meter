'use strict'

var taxiForm = document.getElementById('taxi-form');
var fnameInput = document.getElementById('fname-input');
var lnameInput = document.getElementById('lname-input');
var emailInput = document.getElementById('email-input');
var mileageInput = document.getElementById('mileage-input');
var cost1TableInput = document.getElementById('cost1-table-input');
var mile1TableInput = document.getElementById('mile1-table-input');
var mile2TableInput = document.getElementById('mile2-table-input');
var cost2TableInput = document.getElementById('cost2-table-input');
var outputP = document.getElementById('output-p')

taxiForm.addEventListener('submit', function(){
	event.preventDefault();

	outputP.innerHTML = 'This ride costs you $' + mileageInput.value * 2 + '.';
	cost1TableInput.innerHTML = 2 * 2;
	cost2TableInput.innerHTML = 4 * 2;
});

