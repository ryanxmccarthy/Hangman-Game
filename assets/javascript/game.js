//declare all variables
var words = ['LEGOLAS', 'GIMLI', 'ARAGORN', 'SAURON', 'RIVENDELL', 'GLAMDRING', 'ANDURIL', 'FRODO', 'NAZGUL', 'MORDOR', 'NARSIL', 'GOLLUM', 'BOMBADIL', 'SAMWISE', 'MANWE', 'GREYHAME', 'STORMCROW', 'VALAR', 'MAIAR']
// var randomWord = words[Math.floor(Math.random() * words.length)];
// var hiddenWord = [];
// var lettersGuessed = [];
// var guessesLeft = 10;
var randomWord = reset();

//define all functions
function addLettersGuessed() {  
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(', ');
}
function updateLettersGuessed() {
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
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
	console.log(newWordReturn);
	document.getElementById("hiddenWord").innerHTML = "";
	hideWord(newWordReturn);
	return newWordReturn;
}

//runs when user makes a guess
document.onkeyup = function(event) {
	console.log(event.charCode);
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	if (randomWord.indexOf(userGuess) === -1) {
		if (event.keyCode > 64 && event.keyCode < 91) {
			lettersGuessed.push(userGuess);
			addLettersGuessed();
			guessesLeft--;
			updateGuessesLeft();
		}
	} else {
		// document.getElementById("letter" + randomWord.indexOf(userGuess)).innerHTML = userGuess;
		for(var i = 0; i < randomWord.length; i++) {
			if (randomWord.charAt(i) === userGuess) {
				document.getElementById("letter" + i).innerHTML = userGuess;
			}
		}
	}

	if (guessesLeft == 0) {
        alert("You did not pass");
        reset();
    }
}