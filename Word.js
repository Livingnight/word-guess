var Letter = require('./Letter.js');

var Word = function (word){
	this.word = word;
	this.array = function(){
		var letters = this.word.split('');
		for (let i = 0; i < letters.length; i++){
			console.log(letters[i]);
			let newLetter = Letter(letters[i]);
			newLetter.showFunc();
			newletter.checkLetter(letterGuess);

        }
        console.log(letters);

    }
}
var newWord = new Word("Hello");
newWord.array();
