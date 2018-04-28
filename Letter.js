var Letter = function (
    letter
) {
    this.letter = letter;
    this.guessed = false;
    this.checkLetter = function (letterGuess) {
        if (letterGuess === this.letter.toLowerCase() || letterGuess === this.letter.toUpperCase()) {
            this.guessed = true;
            // console.log('You guessed right! Keep Guessing!');
        }
    };
    this.showFunc = function () {
        if(this.letter === " "){
            return " ";
        }else if (this.guessed === false) {
            return "__";
        }else {
            return this.letter + '';
        }
    };
};

// Letter.prototype.show =

// var newLetter = new Letter('a');
// console.log(newLetter);
// console.log(newLetter.showFunc());
// newLetter.checkLetter(process.argv[2]);
// console.log(newLetter.guessed);
// console.log(newLetter.showFunc());

module.exports = Letter;