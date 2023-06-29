// React functionality like function that prints your name
// React ka package jismein already ho ye

// merge - same File or types or function,

interface Type1{
    properties : string
    method():string;
}
// // const x = 10 //  this wrong
// // const x = 13 // 

interface Type1{
    beach:number;
}
interface Type1{
    method(value:string):string;
}

let temp : Type1 = {
    properties : 'hiho',
    beach:18,
    method(value?:string){
        return"jj"
    }
}
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

import * as React from "react";
import { render } from "react-dom";
import {renderToString} from "react-dom/server";

// declare  vs export
// declare tells don't compile as its already there that is already working object;
// export or import runs everything that we have imported 

declare module "react"{
    interface Component{
        hello(): string;
    }

}

React.Component.prototype.hello = function(){
    return "I have addded a interface in react"
}


interface A{
    set:string;
    ten(args:number,arggs2:number):string;
}

interface A{
    sugar:string;
}
interface A{
    numeric:number;
}

let ace : A={
  set :"sugar rush",
  sugar:"processed sugar is not good for health",
  numeric:100,
  ten(args:10,arggs2:27):string{
    return "its a number"
  }
}
namespace learn{
    export const A=10;
    export interface vayu{
        ellen:string;
        ferns:string;
        petal:boolean
    }
    export interface venus<T>{
        freddy(A:T,B:T):T;
    }
}
namespace learn{
    export  let friend = "string";
    export interface vayu{
        turn:string;

    }

}
console.log(learn.friend)