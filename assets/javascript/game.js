//declare all variables
var words = ['LEGOLAS', 'GIMLI', 'ARAGORN', 'SAURON', 'RIVENDELL', 'GLAMDRING', 'ANDURIL', 'FRODO', 'NAZGUL', 'MORDOR', 'NARSIL', 'GOLLUM', 'BOMBADIL', 'SAMWISE', 'MANWE', 'GREYHAME', 'STORMCROW', 'VALAR', 'MAIAR']
var randomWord = reset();
var correctLetters = [];

//define all functions
function addLettersGuessed() {  
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');
}
function updateLettersGuessed() {
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
	return lettersGuessed;
}
function updateGuessesLeft() {
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
}
function updateCorrectLetters() {
	var correctLetters = [];
}
function newWord() {
	var randomWord = words[Math.floor(Math.random() * words.length)];
	return randomWord;
}
function hideWord(randomWord) {
	for(var i = 0; i < randomWord.length; i++) {
		var newSpan = document.createElement("SPAN");
		newSpan.setAttribute('id', 'letter' + i);
		newSpan.innerHTML = "_ ";
		document.getElementById("hiddenWord").appendChild(newSpan);
	}
}	
function reset() {
	guessesLeft = 10;
	lettersGuessed = [];
	correctLetters = [];
	updateCorrectLetters();
	updateGuessesLeft();
	updateLettersGuessed();
	var resetWord = newWord();
	document.getElementById("hiddenWord").innerHTML = "";
	hideWord(resetWord);
	return resetWord;
}

//runs when user makes a guess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	if (event.keyCode > 64 && event.keyCode < 91) {
		if (lettersGuessed.indexOf(userGuess) != -1) {
			alert("Your love of the halflings' leaf has clearly slowed your mind.");
		} else if (randomWord.indexOf(userGuess) === -1) {
			lettersGuessed.push(userGuess);
			addLettersGuessed();
			guessesLeft--;
			updateGuessesLeft();
		} else {
			for(var i = 0; i < randomWord.length; i++) {
				if (randomWord.charAt(i) === userGuess) {
					var correctLetters = [];
					document.getElementById("letter" + i).innerHTML = userGuess;
					correctLetters.push(userGuess);
					// return correctLetters;
				}	
			}
		}
	}
	// runs when user successfully guesses the word
	// if (correctLetters.length === randomWord.length) {
	// 	alert("You win!");
	// 	location.reload();
	// }
	if (guessesLeft === 0) {
        alert("You shall not pass!");
        reset();
    }
}