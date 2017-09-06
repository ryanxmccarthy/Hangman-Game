var words = ['Legolas', 'Gimli', 'Aragorn', 'Sauron', 'Rivendell', 'Glamdring', 'Anduril', 'Frodo', 'Nazgul', 'Mordor', 'Narsil', 'Gollum', 'Bombadil', 'Samwise']
var lettersGuessed = [];
var guessesLeft = 13;
var compChoice = words[Math.floor(Math.random() * words.length)];

document.getElementById("wordToGuess").innerHTML = compChoice;

//define functions
var addLettersGuessed = function() {  
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');
};

var updateGuessesLeft = function() {
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
};

var reset = function() {
	guessesLeft = 13;
	updateGuessesLeft();
};

//runs when user makes a guess
document.onkeyup = function(event) {
	guessesLeft--;
	updateGuessesLeft();
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	lettersGuessed.push(userGuess);
	addLettersGuessed();
}