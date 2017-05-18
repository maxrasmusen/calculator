var numbers = document.getElementsByClassName('number');
var currentNumberString = ''; //just use display.value
var display = document.getElementById('display');
var operators = document.getElementsByClassName('operator');
var operator = '';
var savedNumber = 0;

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function() {
		push_number(this.value);
	});
}

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function() {
		set_operator(this.value);
	});
}

var eq = document.getElementsByClassName('eq')[0];
eq.addEventListener('click', function() {
	var result = calculate();
	display.value = result;
	savedNumber = result;
	currentNumberString = '';
});

var clear = document.getElementsByClassName('clear')[0];
clear.addEventListener('click', function () {
	clearScreen();
});

function push_number(str) {
	currentNumberString += str;
	display.value = currentNumberString;
}

function set_operator(str) {
	saveNumber();
	operator = str;
	console.log(savedNumber);
}

function saveNumber() {
	if (currentNumberString !== '') {
		savedNumber = parseFloat(currentNumberString);
	}
	currentNumberString = '';
}

function calculate() {
	var newVal = parseFloat(currentNumberString);
	switch(operator) {
		case '+':
			return savedNumber + newVal;
		case '-':
			return savedNumber - newVal;
		case 'x':
			return savedNumber * newVal;
		case '/':
			return savedNumber / newVal;
		default:
			return 'ERROR'
	}
}

function clearScreen() {
	currentNumberString = '';
	savedNumber = 0;
	operator = '';
	display.value = currentNumberString;
}