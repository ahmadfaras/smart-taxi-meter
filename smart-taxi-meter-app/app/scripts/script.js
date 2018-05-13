'use strict'

var taxiForm = document.getElementById('taxi-form');
var fnameInput = document.getElementById('fname-input');
var lnameInput = document.getElementById('lname-input');
var emailInput = document.getElementById('email-input');
var milesInput = document.getElementById('miles-input');
var outputP = document.getElementById('output-p');

taxiForm.addEventListener('submit', function(){
	event.preventDefault();

	outputP.innerHTML = 'This ride costs $' + milesInput.value * 2;
	
});

