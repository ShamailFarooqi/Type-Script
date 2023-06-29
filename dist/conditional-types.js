"use strict";
// // conditional types - if not this type then this type
Object.defineProperty(exports, "__esModule", { value: true });
// 'a' extends 'a'| 'b' ? never : 'a'  = never  |
// 'b' extends 'a' | 'b' ? never : 'b' = never|
// 'c' extends 'a'| 'b' ? never : 'c' =  c   => 'c' 
// |= union &= intersection || = or or logical expression or && logical expresion and
let x = 5;
let y = 11;
let xx; // only used for types or bitwise operators
if (x === 5 || y === 10) {
    console.log('yes works');
}
console.log(5 | 10); // bitwise operations
// const e: any = {
//     shorty();
// }
// const tx = e => {e.shorty()}
// const everything  = (...numbers)=> numbers.reduce((res,num) =>res + num ,0);
// everything(1,2,3,4);
// function everything(...numbers) :number{
//     return numbers.reduce((result, num) =>result + num , 0 );
// }
