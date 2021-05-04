// Gather all elements
var guess;
var correct;
var turns;

var output;
var txtGuess;
var btnAgain;

function init() {
	output = document.getElementById('output');
	txtGuess = document.getElementById('txtGuess');
	btnAgain = document.getElementById('again');

	//hide btnAgain
	btnAgain.style.display = 'none';

	//initialize counter
	turns = 0;

	//initialize output
	output.innerHTML = "I'm thinking of a number between 0 and 100. ";
	output.innerHTML += "Guess my number, and I'll tell if you are ";
	output.innerHTML += 'too high, too low, or correct ';

	// generate random for correct answer
	correct = parseInt(Math.random()) * 100;
	console.log(correct);

	//input txt gets focus
	txt.Guess.focus();
} // end init

function checkGuess() {
	turns++;

	response = turns + ') ';

	// get guess from user

	guess = parseInt(txtGuess.value);

	if (guess < correct) {
		response += ' Your guess is too low try again';
	} else if (guess > correct) {
		response += 'Your guess is too high try again';
	} else if (guess == correct) {
		response += 'Correct!';
		//show again button
		btnAgain.style.display = 'block';
	} else {
		response += 'Please enter a number between 1 and 100';
	}
	//end if
	output.innerHTML = response;
} //end checkGuess
