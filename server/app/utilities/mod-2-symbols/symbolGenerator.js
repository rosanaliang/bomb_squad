// symbolGenerator.js
const _ = require('lodash');
const symbolGenerator = {};
module.exports = symbolGenerator;
const symbolOptions = require('./symbolOptions')


symbolGenerator.generate = function(game) {
    var column = _.sample(symbolOptions.columns);
    const buttons = buttonGen(column);
    game.content = buttons;
};


function buttonGen(column) {
    var thisCol = column;
    for (let i = 0; i < 3; i++) {
        thisCol.splice(_.random(0, 6 - i), 1);
    }
    for (let i = 0; i < thisCol.length; i++) {
        thisCol[i].pressOrder = i + 1;
        thisCol[i].pressed = false;
    }
    thisCol = _.shuffle(thisCol);
    return thisCol;
}

// // Test below:
// var testObj = {};
// symbolGenerator.generate(testObj);
// console.log(testObj)