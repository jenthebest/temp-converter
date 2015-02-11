/* original code
var temp = prompt('What is the temperature in Celsius?');
var converted = (((temp * 9)/5)+32)
alert(temp + ' degrees Celsius is equal to ' + converted + ' Fahrenheit');
*/

function init() {
	// reference to button using button's id
	var convertButton = document.getElementById("convertButton");
	convertButton.onclick = handleConvertButton;

	/*
	var tempInput = document.getElementById("tempInput");
	tempInput.onkeypress = handleKeyPress;
	handleConvertButton();
	*/
}

/*
function handleKeyPress(e) {
	var convertButton = document.getElementById("convertButton");
	if (e.keyCode === 13) {
		convertButton.click();
		return false;
	}
}
*/

function handleConvertButton() {
	// code to get the value from the form
	var tempInput = document.getElementById("tempInput");
	var temp = tempInput.value;
	var convertedTemp = (((temp * 9)/5)+32);

	//console.log(convertedTemp);
	var answer = document.getElementById("answerTemp");
	answer.innerHTML = temp + " degrees Celcius is " + convertedTemp + " degrees Fahrenheit.";
}

window.onload = init;