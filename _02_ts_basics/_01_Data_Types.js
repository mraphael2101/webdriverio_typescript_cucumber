"use strict";
function add(n1, n2, showResult) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    if (showResult) {
        console.log(n1 + n2);
    }
}
const number1 = 5;
const number2 = 2.8;
add(number1, number2, true);
