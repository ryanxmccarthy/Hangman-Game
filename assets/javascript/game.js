// use indexOf to see if the guessed letter is anywhere in the array
// if it is, inject that letter into the empty array


// var words = ['Legolas', 'Gimli', 'Aragorn', 'Sauron', 'Rivendell', 'Glamdring', 'Anduril', 'Frodo', 'Nazgul', 'Mordor', 'Narsil', 'Gollum', 'Bombadil', 'Samwise', 'Manwe', 'Greyhame', 'Stormcrow', 'Valar', 'Maiar']
var words = [['L', 'e', 'g', 'o', 'l', 'a', 's'], ['G', 'i', 'm', 'l', 'i']]
var compChoice = words[Math.floor(Math.random() * words.length)];
hideWord();
var lettersGuessed = [];
var guessesLeft = 10;
document.getElementById("wordToGuess").innerHTML = compChoice;

//define functions
function hideWord() {
	for(var i = 0; i < compChoice.length; i++) {
		compChoice[i] = "_ ";
	}
}
var addLettersGuessed = function() {  
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');
}
var updateLettersGuessed = function() {
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
}
var updateGuessesLeft = function() {
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
}
var newWord = function() {
	var compChoice = words[Math.floor(Math.random() * words.length)];
	document.getElementById("wordToGuess").innerHTML = compChoice;
}
var reset = function() {
	guessesLeft = 10;
	lettersGuessed = [];
	updateLettersGuessed();
	updateGuessesLeft();
	newWord();
	hideWord();
}

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