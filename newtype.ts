// // let sample : number[] =[1,2,3,4,5,"vishav"];
// // let sample1 = [1,2,3,4,"vishav"];
// // console.log(sample);
// // console.log(sample1);

// // import { Profiler } from "react/cjs/react.production.min";

// // const trey : Array<string> = ["qwert","yuiop","vishav"];
// // console.log(trey);

// // enum gender{
// //     vishav = "male",
// //     shumail = "female",
// //     shadab = "female"
// // }
// // let gender1 :gender= gender.shumail;
// // console.table([gender.shadab, gender.shumail, gender.vishav]);
// // // console.log(typeof(gender1));
// // type vishav  = string | number;
// // let  a: vishav ="try", 10;
// // console.log(typeof(a));


// // function sum1(a: number, b : number, c?:number) :number{
// //     return a * b + c
// // }
// // sum1(1,2);

// // const email1 = typeof document !== "undefined"? document.getElementById("email1"):null;
// // if (email1) {
// //     email1.addEventListener ('change', e =>{
// //         const input = <HTMLInputElement> e.currentTarget;
// //         console.log(input.value);
// //     });
// // }

// class Checks {

//     name: string;
//     age: number = 10;

// }

// // const shum = new Check();
// // // shum.name = "SHumail";
// // // shum.age = 23;

// // const vish = new Check();
// // // vish.name = "Vishav";
// // // vish.age = 30;

// // console.log(shum.name, shum.age);
// // console.log(vish.name, vish.age);

// // class Dog{
// //     protected name : String;

// //     constructor(value:string){
// //         this.name = value;
        
// //     }
// // }

// // class pup extends Dog{
// //     pup_name = this.name;

// //     constructor(value:string){
// //         super(value)
// //     }
// // }
// // let balcky = new Dog("Blacky");
// // console.log(balcky.name);
// // console.log(balcky.value);

// class robo{
//     name : string;
//     feature : any;

//     constructor( feature: any,name :string){
//         this.feature = feature;
        
//     }
//      walk( distance:number) {
//         console.log(`the name of robo is ${this.name} it has a feature ${this.feature} and covers a distance of ${distance} km`);
        
//     }

//     set name1(value : string) {
//         this.name = "the" + value;
//     }
//     get name1(){
//         return this.name ;

//     }
//     }



// const obj = new robo(4 , "vishav");
// // console.log(obj.feature);
// obj.walk(157);
// const obj1 = new robo(12, "ily");
// obj1.name1 = "ilysm"
// console.log(obj1.name);
// // if you want to use class property inside of a function or constructor within a class then you have
// // to use this.

// // I wnat ki name and feature directly onject bnate time aajaye,and distance jo hai voi
// // method ko object call krega tb enter krna h

// // let a :number = 10

// // function square(a:number): number{
// //     return a*a;
// // }
// // console.log(a);
// // console.log(square(100));

// // private field : to declare a pvt field we start with #
// interface Animal {
//     name: string;
//   }
  
//   class Cat implements Animal {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
  
// function genericfunc<T>(X:T) :T{
//     return X
// }
// const genericfunction = <T>(X:T):T => X;
function somefun(myargument : string | number | boolean) {
    if (typeof myargument === "string"){
        let x = myargument.toLowerCase();

    }
    else if (typeof myargument === "number"){
        myargument.toFixed();
    }
    else {
        myargument;
    }
}