const inquirer = require('inquirer');
const Word = require('./Word.js');
const category = require('./wordList');
let lives = 10;
let gameState = false;
let gameWin = false;
let computerChoice = false;
function game() {
    if (gameState === false) {
        // let gameState = false;
        inquirer
            .prompt([
                {
                    name: 'play',
                    message: 'Do you want to play?',
                    type: 'list',
                    choices: ['Yes', 'No']
                }
            ]).then(function (answer) {
                console.log(answer);
            if (answer.play === 'Yes') {
                inquirer
                    .prompt([
                        {
                            name: 'category',
                            message: 'Which category would you like to pick?',
                            type: 'list',
                            choices: ['Around the House', 'Book Title', 'Quotation']
                        }
                    ]).then(function (answers2) {
                    if (answers2.category === 'Around the House' && computerChoice === false) {
                        const computerPick = category['Around the House'][Math.floor(Math.random() * category["Around the House"].length)];

                        var newWord = new Word(computerPick);
                        function userGuess(){
                            if(gameWin === false){
                                inquirer
                                    .prompt([
                                        {
                                            name: 'guess',
                                            message: 'Guess a letter!',
                                            type: 'input'
                                        }
                                    ]).then(function(answer3){
                                        console.log(newWord.wordArray());
                                        newWord.checkUserGuess(answer3.guess);
                                        userGuess();

                                })
                            }
                        }
                        userGuess();

                    }
                })

            }else{
                console.log('Game Over! Come play again sometime!');
            }
        });
    }
}
game();

