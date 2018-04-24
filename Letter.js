var Letter = function (
    letter) {
    this.letter = letter;
    this.guessed = false;
    this.checkLetter = function (letterGuess) {
        if (letterGuess === this.letter) {
            this.guessed = true;
        }
    };
};

Letter.prototype.show = function () {
    if (this.guessed === false) {
        return "_";
    } else {
        return this.letter + '';
    }
};

var newLetter = new Letter('a');
// console.log(newLetter);
console.log(newLetter.show());
newLetter.checkLetter(process.argv[2]);
console.log(newLetter.guessed);
console.log(newLetter.show());

module.exports = Letter;