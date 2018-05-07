'use strict'


var milesInput = document.getElementById('miles-input');
var submit = document.getElementById('submit-btn');
var outputP = document.getElementById('output-p');
var mileForm = document.getElementById('mile-form');


mileForm.addEventListener('submit', function(){
	
	event.preventDefault('');

	outputP.innerHTML += 'This ride costs $' + milesInput.value * 2 ;
	
});

