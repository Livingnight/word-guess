const inquirer = require('inquirer');

var category = {

    'Around the House': [
        "A Pile Of Coats",
        "A Shelf Full Of Knickknacks",
        "A Sock With Holes In It",
        "A Vase Of Flowers",
        "Accent Furniture",
        "Afghan Rug"
    ],

    'Book Title': [
        "A Wrinkle In Time",
        "Clifford The Big Red Dog",
        "Jane Eyre",
        "Pride And Prejudice",
        "The Call Of The Wild",
        "The Chronicles Of Narnia"
    ],

    'Quotation': [
        "A Good Deed Is Never Lost",
        "A Pocket Full Of Rye",
        "Along Came A Spider",
        "Be It Ever So Humble",
        "Clothes Make The Man",
        "All Roads Lead To Rome"
    ]
};
console.log(category["Around the House"].length);

module.exports = category;