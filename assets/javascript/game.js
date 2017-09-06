// use .split to turn the string from your array into an array with each letter separate
// use indexOf to see if the guessed letter is anywhere in the array
// if it is, inject that letter into the empty array


var words = ['Legolas', 'Gimli', 'Aragorn', 'Sauron', 'Rivendell', 'Glamdring', 'Anduril', 'Frodo', 'Nazgul', 'Mordor', 'Narsil', 'Gollum', 'Bombadil', 'Samwise', 'Manwe']
var lettersGuessed = [];
var guessesLeft = 13;
var compChoice = words[Math.floor(Math.random() * words.length)];
document.getElementById("wordToGuess").innerHTML = compChoice;

//define functions
var addLettersGuessed = function() {  
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');
};
var updateLettersGuessed = function() {
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
};
var updateGuessesLeft = function() {
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
};
var newWord = function() {
	var compChoice = words[Math.floor(Math.random() * words.length)];
	document.getElementById("wordToGuess").innerHTML = compChoice;
};
var reset = function() {
	guessesLeft = 13;
	lettersGuessed = [];
	updateLettersGuessed();
	updateGuessesLeft();
	newWord();
};

//runs when user makes a guess
document.onkeyup = function(event) {
	guessesLeft--;
	updateGuessesLeft();
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	lettersGuessed.push(userGuess);
	addLettersGuessed();
	if (guessesLeft == 0) {
        alert("You did not pass");
        reset();
    }
}