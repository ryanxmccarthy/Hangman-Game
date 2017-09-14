//declare all variables
var words = ['LEGOLAS', 'GIMLI', 'ARAGORN', 'SAURON', 'RIVENDELL', 'GLAMDRING', 'ANDURIL', 'FRODO', 'NAZGUL', 'MORDOR', 'NARSIL', 'GOLLUM', 'BOMBADIL', 'SAMWISE', 'MANWE', 'GREYHAME', 'STORMCROW', 'VALAR', 'MAIAR']
var randomWord = reset();

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
	updateGuessesLeft();
	updateLettersGuessed();
	var newWordReturn = newWord();
	document.getElementById("hiddenWord").innerHTML = "";
	hideWord(newWordReturn);
	return newWordReturn;
}

//runs when user makes a guess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	if (event.keyCode > 64 && event.keyCode < 91) {
		if (lettersGuessed.indexOf(userGuess) != -1) {
			alert("Your love of the halflings' leaf has clearly slowed your mind. You already guessed that letter.");
		} else if (randomWord.indexOf(userGuess) === -1) {
			lettersGuessed.push(userGuess);
			addLettersGuessed();
			guessesLeft--;
			updateGuessesLeft();
		} else {
			for(var i = 0; i < randomWord.length; i++) {
				if (randomWord.charAt(i) === userGuess) {
					document.getElementById("letter" + i).innerHTML = userGuess;
				}
			}
		}
	}

	// if (guessesLeft > 0)

	if (guessesLeft === 0) {
        alert("You shall not pass");
        reset();
    }
		}