// use indexOf to see if the guessed letter is anywhere in the array
// if it is, inject that letter into the empty array

//declare all variables
var words = ['LEGOLAS', 'GIMLI', 'ARAGORN', 'SAURON', 'RIVENDELL', 'GLAMDRING', 'ANDURIL', 'FRODO', 'NAZGUL', 'MORDOR', 'NARSIL', 'GOLLUM', 'BOMBADIL', 'SAMWISE', 'MANWE', 'GREYHAME', 'STORMCROW', 'VALAR', 'MAIAR']
var randomWord = words[Math.floor(Math.random() * words.length)];
var hiddenWord = [];
var lettersGuessed = [];
var guessesLeft = 10;

console.log(randomWord);

//define functions
for(var i = 0; i < randomWord.length; i++) {
	document.getElementById("hiddenWord").innerHTML = "";
	hiddenWord.push("_ ");
	}

document.getElementById("hiddenWord").innerHTML = hiddenWord;

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
	var randomWord = words[Math.floor(Math.random() * words.length)];
	document.getElementById("randomWord").innerHTML = randomWord;
}
var reset = function() {
	guessesLeft = 10;
	lettersGuessed = [];
	updateLettersGuessed();
	updateGuessesLeft();
	newWord();
}

//runs when user makes a guess
document.onkeyup = function(event) {
	guessesLeft--;
	updateGuessesLeft();
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	if (randomWord.indexOf(userGuess) === -1) {
		lettersGuessed.push(userGuess);
		addLettersGuessed();
	}

	if (guessesLeft == 0) {
        alert("You did not pass");
        reset();
    }
}