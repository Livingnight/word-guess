var Letter = require('./Letter.js');

var Word = function (word) {
    this.word = word;
    this.array = this.word.split('');
    this.unsolved = [];
    this.wordArray = function () {
        for (var i = 0; i < this.array.length; i++) {
            var objArray = ''
            var newLetter = new Letter(this.array[i]);
            // console.log(newLetter.showFunc());
            var wordObject = newLetter.showFunc();
            objArray += wordObject + ' ';
            this.unsolved.push(newLetter);
            console.log(objArray);
            // console.log(objArray[i]);

        }
        console.log(this.unsolved);
    };

    this.checkUserGuess = function (userGuess) {
        var wordArr = ''
        this.unsolved.forEach(function (letter, index) {
            letter.checkLetter(userGuess);
            wordArr += letter.showFunc() + ' ';


        });
        console.log(wordArr);
    }
}

// var newWord = new Word("Hello");
// newWord.wordArray();
// newWord.checkUserGuess(process.argv[2]);
modules.export = Word;
