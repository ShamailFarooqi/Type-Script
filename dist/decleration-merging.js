"use strict";
// React functionality like function that prints your name
// React ka package jismein already ho ye
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let temp = {
    properties: 'hiho',
    beach: 18,
    method(value) {
        return "jj";
    }
};
// import react from 'react'
// interface check{
//     prp: string;
//     fnt(): string;
// }
// interface check{
//     fnt(arg:string):string;
// }
// const x : check = {
//     prp:'kaka',
//     fnt(arg?:string){
//         return 'hoho'
//     }
// }
// namespace - is grouping of particular functionalities like classes , functions, interface , types etc EventCounts[Symbol]
// module or namespace
// namespace myNewCheck{
//     export const x  = 10;
//     export interface Shumail{
//         chulbul:string;
//         getNice():string;
//     }
// }
// namespace myNewCheck{
//     export const getChulbul = () => x;
//     export interface Shumail{
//         chui:number;
//         getNice(arg:boolean):string;
//     }
// }
// console.log(myNewCheck.x);
// console.log(myNewCheck.getChulbul());
// const temper: myNewCheck.Shumail = {
//     chulbul : 'nope',
//     chui : 1,
//     getNice(arg?:boolean){
//         return 'Nada'
//     }
// }
// console.log(temper)
// interface merging inside an namespace 
// enum Temparory{
//     tempFruit = "apple",
//     tempVeggies = 'potato'
// }
// enum Temparory{
//     tempjuice = 'mixJuice'
// }
// const x =  Temparory.tempjuice
// console.log(x)
// enum Temp{
//     tempFruit = "apple",
//     tempVeggies = 'potato'
// }
// namespace Temp{
//     export const valueCheck = () => Temp.tempFruit;
// }
// const x = Temp.valueCheck()
// console.log(x)
// class hexx{
// }
// namespace hexx{
//     export const addValue = "hexx add";
//     export const num:number = 10;
// }
// hexx.addValue.includes("hexx add"); // this can add string , array thats it
// // hexx.num.includes(10);
// console.log(hexx.addValue)
const React = __importStar(require("react"));
React.Component.prototype.hello = function () {
    return "I have addded a interface in react";
};
let ace = {
    set: "sugar rush",
    sugar: "processed sugar is not good for health",
    numeric: 100,
    ten(args, arggs2) {
        return "its a number";
    }
};
var learn;
(function (learn) {
    learn.A = 10;
})(learn || (learn = {}));
(function (learn) {
    learn.friend = "string";
})(learn || (learn = {}));
console.log(learn.friend);
