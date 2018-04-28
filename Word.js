var Letter = require('./Letter.js');
let wordArr = '';

var Word = function (word) {
    this.word = word;
    this.array = this.word.split('');
    this.unsolved = [];
    this.wordArray = function () {
        for (var i = 0; i < this.array.length; i++) {
            var objArray = '';
            var newLetter = new Letter(this.array[i]);
            // console.log(newLetter.showFunc());
            var wordObject = newLetter.showFunc();
            objArray += wordObject + ' ';
            this.unsolved.push(newLetter);
            // console.log(objArray);

        }
        // console.log(this.unsolved);
    };

    this.checkUserGuess = function (userGuess) {
        wordArr = '';
        this.unsolved.forEach(function (letter, index) {
            letter.checkLetter(userGuess);
            wordArr += letter.showFunc() + ' ';
            // console.log(this.wordArr);

        });
        console.log(`word array: ${wordArr}`);
        wordArr = '';
    }
};

// var newWord = new Word("Hello Dolly");
// newWord.wordArray();
// newWord.checkUserGuess(process.argv[2]);
module.exports = Word;
