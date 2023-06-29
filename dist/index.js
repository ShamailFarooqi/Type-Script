"use strict";
// // // import { multiply, multiplybytwo } from "./multiply";
// // // const a = 15;
// // // const b = 11;
// // // console.log(`${a} * ${b} = ${multiply(a, b)}`);
class pagalpann {
    constructor(A, B) {
        this.S = A;
        this.V = B;
    }
}
pagalpann.Q = "telepathy";
const T = new pagalpann(12, "pagal");
console.log(pagalpann.Q);
const Fruits = (A) => A.fruits().toUpperCase();
// class eel implements check{
//      fruits() {
//         return "uluu ki dumm"
//      }
// }
// // const R =new eel();
// const D :check = {
//     fruits(){
//         return "Stupid"
//     }
// }
// // Fruits(D);
// console.log(Fruits(D))
// // console.log(Fruits(R))
// // write a function that accepts a number and return true if its even and false if it's odd
// function evenOdd (A:number){
//     if (A%2==0){
//         return true
//     } 
//     else {
//         return false
//     }
// }
// const W = evenOdd(17);
// console.log(W)
// const eventOdd  =(A:number) => {if(A%2==0) {return true } else {return false}};
// console.log(eventOdd(12))
// // write an fucntion that accepts as many values and tell one by one if its prime or not
// for(let i=1; i<=10;i=i+2){
//     console.log(i)
// }
// let x = 50
// console.log(x++) // 50
// console.log(x)  // 51
// let y = 40
// console.log(++y)// 41 pre increment
// console.log(y)// 41
// let z = 30
// // console.log(z+2) //32
// // console.log(z) //30
// function prime(T:number){
//     let primeCheck = true
//     for (let A=2;A<=T; A++){
//         if(T%A == 0 ){
//             primeCheck = false
//             break  
//         } 
//     }
//     if (primeCheck==true){ 
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(prime(19))
// 
// for(let i= 10; i >=0 ;i--){
//     console.log(i)
// }
// write a function that accepts any value greater than 2 multiple times and tell if that number is prime
// ... are basically Array
// function primeCheck(...S:number[]){ 
//     console.log(S);
//     for(let i=0; i<S.length; i++){
//         let Check = true
//         for(let A=2;A<S[i];A++){
//             if (S[i]%A==0){
//                 Check= false
//                 break
//             }
//         }
//         if (Check==true){
//             console.log(`the value is `+S[i], true)
//         }
//         else{
//             console.log(`the value is `+ S[i] ,false)
//         }
// }
// }
// primeCheck(3,6,8,16);
//x =  [ 3, 6, 8, 16 ]  x[0], x[1], x[2], x[3]
/////////////////////////////////////////////////////////////////
//equals sign
// =, ==. ===
// 'true' == true // condition is true
// 'true'=== true // condition is false
// != , !==,
// variables ---> const, let , var 
// var x = 10
// var x = 20 // var doesn't check in the file or block for repition
// let y = 10
// let y = 20 // var does check in the file or block for repition
// let is block scoped and var is not
// if (true){
//     let z:number = 200
// }
// if (true){
//     var q: number = 300
// }
// console.log(z,q)
// const sh = 19;
// let yu = 20;
// var il = 23;
// sh = 34
// yu = 24
// il = 31
//----------------------------------------------------------------------------------
// // number type s
// const j : number = 0b0100;
// const h: number = 0xAC112;
// const f: number = 0o1234;
// const r: number =1.4567;
// const a: number = 1234;
// const t: number = 1239808099;
// console.log(r.toPrecision(4)); // 1.457
// console.log(a.toExponential(1)); // 1.2e+3
// console.log(r.toFixed(2));
// console.log(t.toLocaleString('ur-IN'));// //۱٬۲۳۹٬۸۰۸٬۰۹۹
// console.log(t.toString());
// console.log(h.valueOf()) //704786
//-------------------------------------------------------------------------------------------
// Strings
// let str:string = 'shumail';
// let str1: string = "vishav";
// let str2: string = "    jrt jjje";
// console.log(str.charAt(2))
// console.log(str.charCodeAt(3))
// console.log(str.concat(str1))
// console.log(str.indexOf("l"))
// console.log(str.replace("l","L"))
// console.log(str2.split(''))
// console.log(str2.trim())
// console.log(str2.codePointAt(4))
// console.log(str1.endsWith('v'))
// console.log(str1.slice(1,4))
//----------------------------------------------------------------------------------
// Array
// let fruits:(string | number )[] = ['apple', 'Orange', 'Banana', 12];
// // console.log(fruits.splice(1,2));
// // console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('vishav'))
// console.log(fruits.sort())
// console.log(fruits.reverse())
// console.log(fruits.includes('Ball'))
// console.log(fruits.join("+"))
// console.log(fruits.find('apple')))
//-----------------------------------------------------------------------------
// Enum
// enum Shamail{
//     Beautiful=10,
//     Pretty,
//     Kind,
//     Awesome
// }
// enum Shumails{
//     beau="beautiful",
//     pret="pretty",
//     kin=1,
// }
// console.log(Shamail[11])
// console.log(Shumails['kin'])
// console.log(Shumails.beau)
//---------------------------------------------------------------------------
// Type Assertions
// let obj ={
//     num:10, // we had to assign values
//     str: 'sy'
// }
// interface onjs{
//     num: number;
//     str:string;
// }
// const x : onjs = {
//     num : 10,
//     str : '22'
// }
// let objec = <onjs> { };
// objec.num =10;
// objec.str='shumail'
//----------------------------------------------------------------------------
// //if's
// // gretaer of 3 numbers in array
// let arr :Array<number>= [10, 9, 10] // 3 numbers 
// if (arr[0]>arr[1] && arr[0]>arr[2]) {
//     console.log( arr[0])
// }
// else if (arr[1]>arr[2]){
//     console.log( arr[1])
// }
// else{
//     console.log(arr[2])
// }
//-------------------------------------------------------------------------------------
//switch statement
//   1 2 3 
//   1 happy 2 sad 3 awesome
// let choice:number = 3
// switch(choice){
//     case 1: 
//     console.log('happy')
//     break;
//     case 2:
//     console.log('sad')
//     break;
//     case 3:
//         console.log('awesome')
//     break;
//     default:
//         console.log('better days are coming')
// }
//---------------------------------------------------------------
//for loops
const x = [23, 44, 65, 86];
// for(let i=0;i<x.length;i++){
//     console.log(x[i])
// }
// for (let A of x){
//     console.log(A)
// }
// for (let Z in x){
//     console.log(Z)
// }
//////////////////////////////////////////////////////////////
// let i =0;
// while(i<x.length){
//     console.log(x[i])
//     i++
// }
///////////////////////////////////
// let i=0;
// do{
//     console.log(x[i])
//     i++
// }while(i<x.length);
/////////////
/////////////////////////////////////////////////////////////----------------------
//Functions//
function Swap(a, b) {
    const temp = a;
    a = b;
    b = temp;
    return [a, b];
}
let a = 10;
let b = 20;
// const  temp =a
// a=b
// b=temp
// console.log(a,b)
// a = a+b
// b=a-b
// a=a-b
// console.log(a,b)
// function cube (a:number): number;
// function cube (a:string):string;
// function cube (a:any):any{
//     return a+a+a
// }
// console.log(cube(10))
// console.log(cube('10'))
function check(arg) {
}
check(12);
// wirte a function to check if a number is pallindrome or not
let xy = [1, 2, 3];
xy[3] = 3;
console.log(xy);
