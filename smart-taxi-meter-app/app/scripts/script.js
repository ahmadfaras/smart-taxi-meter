'use strict'

var taxiForm = document.getElementById('taxi-form');
var fnameInput = document.getElementById('fname-input');
var lnameInput = document.getElementById('lname-input');
var emailInput = document.getElementById('email-input');
var mileageInput = document.getElementById('mileage-input');
var ridersTbody = document.getElementById('riders-tbody');
var outputP = document.getElementById('output-p')

taxiForm.addEventListener('submit', function(){
	event.preventDefault();
	ridersTbody.innerHTML += '<tr>'+
									'<td>'+fnameInput.value+'</td>'+
									'<td>'+lnameInput.value+'</td>'+
									'<td>'+emailInput.value+'</td>'+
									'<td>'+mileageInput.value+'</td>'+
									'<td>'+mileageInput.value * 2 +'</td>'+
								'</tr>'
	outputP.innerHTML = 'This ride costs you $'+mileageInput.value*2 + '.';
	// After taking data from input, we assign empty string to them to 
	// make input field clear or clean.
	
		fnameInput.value = '';
		lnameInput.value = '';
		emailInput.value = '';
		mileageInput.value = '';

	

});

/*
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
for (var i = 0; i< riderList.length; i++){
	ridersTbody.innerHTML += '<tr>'+
									'<td>'+ riderList[i].fname +'</td>'+
									'<td>'+ riderList[i].lname +'</td>'+
									'<td>'+ riderList[i].email +'</td>'+
									'<td>'+ riderList[i].mileage +'</td>'+
									'<td>'+ riderList[i].cost +'</td>'+
								'</tr>'
}
*/

