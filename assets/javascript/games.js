
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess)

function winAdd(x) {
	winCount++;
	document.getElementById("winCount").textContent = winCount;
}

function lossAdd(x) {
	lossCount++;
	document.getElementById("lossCount").textContent = lossCount;
}

function guessMinus(x) {
	guessesLeft--;
	document.getElementById("guessesLeft").textContent = guessesLeft;
}


document.onkeyup = function(event) {

	var userGuess = event.key.toLowerCase();


	if (alphabet.indexOf(userGuess) !== -1 && guessesSoFar.indexOf(userGuess) === -1) {

		if (userGuess === computerGuess) {
			alert("Correct! The letter was " + computerGuess);
			
			winAdd();

	        guessesLeft = (10);
		    document.getElementById("guessesLeft").textContent = guessesLeft;

		    guessesSoFar = [];
	        document.getElementById("guessesSoFar").textContent = guessesSoFar;			

			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log(computerGuess);


		} else if (userGuess !== computerGuess) {

			guessMinus();

	       	guessesSoFar.push(userGuess);
	        document.getElementById("guessesSoFar").textContent = guessesSoFar;

	        if (guessesLeft === 0) {
	        	alert("Out of Guesses. You Lose this Round. The letter was " + computerGuess + "!");

	        	lossAdd();

	        	guessesLeft = (guessesLeft + 10);
		        document.getElementById("guessesLeft").textContent = guessesLeft;

		        guessesSoFar = [];
		        document.getElementById("guessesSoFar").textContent = guessesSoFar;

				computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
				console.log(computerGuess);
	        }

	    } 

	} else {
		alert("Not a valid guess.  Please guess a letter you have not yet guessed yet!")
	}
}


