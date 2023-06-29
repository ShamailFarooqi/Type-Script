// // conditional types - if not this type then this type

import { useInsertionEffect } from "react";

// type newTypes = symbol;

// type CondType = newTypes extends symbol? boolean : number;

// // class child extends Parent 

// // parent
// // \\\
// // child

// function check<T>(value:T){
//     const somed = (arg: T extends string? string :boolean) => {};
//     return somed;
// }
// const l = check(10)

// function checkt<T2>(val:T2){
//     let  some : T2 extends string? string :Boolean;
//     return some;
// }

// const ll = checkt(10)

// the return value is unknown

// function check<T>(value:T){
//     const somed = (arg: T extends string? string :boolean) => {
//         const a : string | boolean = arg;
//     };
//     return somed;
// }
// const l = check(10)


// (a+b)*c = ac +bc
//nested conditional types 
type T = '';
type shumail = T extends number ? string : T extends boolean ? symbol : T extends string? boolean: any

//never 
type x3 = string|number;

type temps = never | string |  boolean | null

type temps1 = string & never & null;


// working of Exclude
// type Exclude<T, U> = T extends U ? never : T;
// if T extends U{  // nutshell
//     never
// }
// else{
//     T
// }

type DistributiveExclude = Exclude <'a'|'b'|'c', 'a'| 'b' >
// 'a' extends 'a'| 'b' ? never : 'a'  = never  |
// 'b' extends 'a' | 'b' ? never : 'b' = never|
// 'c' extends 'a'| 'b' ? never : 'c' =  c   => 'c' 
// |= union &= intersection || = or or logical expression or && logical expresion and

let x = 5;
let y = 11;
let xx : string | boolean  // only used for types or bitwise operators
if (x === 5 || y === 10){
    console.log('yes works')

}

console.log(5|10); // bitwise operations

// const e: any = {
//     shorty();
// }
// const tx = e => {e.shorty()}

// const everything  = (...numbers)=> numbers.reduce((res,num) =>res + num ,0);
// everything(1,2,3,4);

// function everything(...numbers) :number{
//     return numbers.reduce((result, num) =>result + num , 0 );
// }







