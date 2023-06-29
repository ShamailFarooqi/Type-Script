"use strict";
exports.__esModule = true;
exports.multiplybytwo = exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function multiplybytwo(num) {
    return multiply(num, 2);
}
exports.multiplybytwo = multiplybytwo;

const everything  = (...numbers)=> numbers.reduce((res,num) =>res + num ,0);
everything(1,2,3,4);

// function everything(...numbers) :number{
//     return numbers.reduce((result, num) =>result + num , 0 );
// }
