// // // import { multiply, multiplybytwo } from "./multiply";
// // // const a = 15;
// // // const b = 11;
// // // console.log(`${a} * ${b} = ${multiply(a, b)}`);

// // // interface Itry {
// // //    hiest : number;
// // // }
// // // function moneyhiest(bet :Itry ){
// // //     let total = bet.hiest;
// // //     const value = total *120;
// // //     }

// // // class hex{
// // //     heist:number = 11;
// // // }
// // // moneyhiest(hex);


// // interface codeA {
// //     user_name: string;
// //     pass : number;

// // }

// // class juni implements codeA {
// //     user_name: string;
// //     pass: number;

// //     constructor(user_name:string, pass:number){
// //         this.pass = pass;
// //         this.user_name=user_name;
// //     }
// // }
// // // code B = user name: string. pass: any =>  android 13 wa


// // interface Itry {
// //    hiest : number;
// // }
// // function moneyhiest(bet :Itry ){
// //     let total = bet.hiest;
// //     const value = total *120;
// //     console.log(value)

// //     }

// // class ullu implements Itry{
// //      hiest: number;
// //      constructor(hist:number){
// //         this.hiest= hist;
// //      }
// // }
// // const obj = new ullu(10)

// // moneyhiest(obj)

// // const x = 10;
// // let x :string =  "bool"
// // let x2 = "gwevhbgu"

// // const x:number = 10;

// // function temp(x:number){
// //     console.log(x)

// // }
// // temp(11)
// // console.log(x)


// // interface Async{
// //    sumtotal(total :number) :number; // call signatures tell type of method that we will create after implementing interface
// // }
// // function calculateTax(value:Async){
// //   const tax = value.sumtotal(5) *0.05 +3;
// //   return tax;
// // }
// // class idjit implements Async{
// //    sumtotal(total: number): number {
// //        return 100;
// //    }
// //    }
// // const obj =new idjit();
// // console.log(calculateTax(obj));

// ////////////////////////////////////////////////////////////////////////

// // Class => 1) Static 2) Dynamics

// // class Shumail <t> {
// //    public static _name: string = "ShumailBilal Farooqi";
// //    type : string;
// //    constructor(type:string){
// //       this.type = type
// //    }
// // }
// // const shum = new Shumail("Rondu");
// // console.log(shum.type)
// // console.log(Shumail._name)

// // wE HAVE LEARNT TYPES,INTERFACES,classeS,FUNCTIOns,modules,enum,STATic dynamic,getter setter,union 
// //intersection

// //GETTER SETTER
// // class Shumail {
// //    public static _name: string = "ShumailBilal Farooqi";
// //    type : string;
// //    constructor(type:string){
// //       this.type = type
// //    }
// //    set types(tmp:string){ // setter should have exactly one parameter, also as we call setter getter is automatically called
// //       this.type = "Beautiful ";
// //    }
// //    get types(){
// //       return this.type

// //    }
// // }
// // const shum_obj = new Shumail("Rondu");
// // console.log(shum_obj.type);
// // shum_obj.types = "Shumail"; // calling getter setter
// // console.log(shum_obj.type) 

// // Describing  static implementation by interface 
// // interface Animals {
// //    name:string; 
// // }
// // class Cat implements Animals{
// //    name:string;
// //    constructor(meow:string){
// //       this.name = meow;
// //    }
// // }
// // class Dog implements Animals{
// //    name:string;
// //    constructor(blacky:string){
// //       this.name = blacky;
// //    }
// // }

// // interface AnimalConstructor{
// //    new (name:string) : Animals
// // }

// // function initializeAnimal(animal:AnimalConstructor){ // initialize the interface
// //    const obj = new animal("vishav")
// //    obj.name
// //  }

// // // Describing  instance implmentation of class by interface
// // interface Animals {
// //    name:string;
// //    group: string;
// //    setgroup(group:string): void;
// // }
// // class Cat implements Animals{
// //    name:string;
// //    group: string;
// //    constructor(meow:string,seil:string){
// //       this.name = meow;
// //       this.group=seil;
      
// //    }
// //    setgroup(purr:string){
// //       console.log("purr purr purr");
// //    }
// // }
// // class Dog implements Animals{
// //    name:string;
// //    group:string;
// //    constructor(blacky:string,slack:string){
// //       this.name = blacky;
// //       this.group= slack;
// //    }
// //    setgroup(bow:string){
// //       console.log("bow bow bow");
// //    }
// //    meth(){
// //       console.log("cha cha")
// //    }
// //    }

// // interface AnimalConstructor<T>{
// //    new (name:string,group:string) : T
   
// // }

// // function initializeAnimal<T extends Animals>(animal:AnimalConstructor<T>, name:string, group: string){ // initialize the interface and its sub types
// //    const obj = new animal(name, group)
// //    return obj
// //  }

// //  const x = initializeAnimal(Cat,"felix","vishav");
// //  const y = initializeAnimal(Dog,"sety","terry");
// //  y.meth()



// // Generic Types
// // interface typss <X>{
// //    check:X;
// //    sign(A:X):X;
// //    <UU>(a:UU): UU

// // }
// // function genericShum<T>(X:T) :T{
// //    return X

// // }

 
// // fn name = arguments = return 

// // const X =(arg:number)=> arg;
// // const X =<U>(arg:U): U => arg;
// // class generic<g>{
//    //  static sera:g;
// //    name:g;
// //    clats:g;
// //    constructor(nate:g,clags:g){
// //       this.clats= clags;
// //       this.name =nate;
// //    }

// // }

// // const temp:number[] = [1,2,3,]
// // const temp2: Array<number> = [1,2,3,4]
// // interface CanFly {
// //    fly(): void;
// //  }
  
// // class trench{
// //    fly():void{
// //    };
// // }
// //  function launch(player:trench) {
// //    console.log('Launching the player');
// //    player.fly();
// //  }

// //  function launch<T extends CanFly>(player:T) {
// //    console.log('Launching the player');
// //    player.fly();
// //  }
// // interface Cat{
// //    walk:string;
// //    purr:string;

// // }
// // interface Dog{
// //    walk:string;
// //    bark:string;
// // }

// // function Mypet<t> (obj:Cat | Dog):t{
// //    return Mypet()

// // }
// // interface A<t>{
// //    fin:string;
// //    sign(x:t):t;
// // }

// // class train implements A<t>{
// //    fin:string;
// //    engine:string;
// //    boogie_No:number;
// //    constructor(steam:string,iron:number,gill:string){
// //       this.boogie_No=iron;
// //       this.engine=steam;
// //       this.fin = gill;
// //    }
// //    sign=<t>(A:t):t =>A

// // }
// // const fern = new train("steam",25,"fenty");
// // fern.sign("Apple");
// // console.log(fern);



// // we use union type to describe a value that can have one of a several type
// //in case of union  don't use const as const only prefers value over types mentioned
// // let A :string | number;

// // let x: number|string = "hhh";

// // const yx:string|number = "hoho";
// // console.log(typeof yx)
// // console.log(typeof x);

// // const t1 = 12;
// // let t2 = 1;



// // let or  var  they don't value the value of variable

// // interface A{
// //    hello():void;
// //    yello():void;
// // }

// // function typeCheck(obj:string|A|number){
// //    return typeof(<A>obj).hello !== 'undefined'; // return boolean
// // }
// // // call signatures doesn't have brackets when being used

// // function tmp(x:string|A|number){
// //    if (typeof x ==="string"){
// //       console.log("hh")
// //    }
// //    else if (typeCheck(x)){
// //       console.log(x)
// //    }
// //    else{
// //       console.log('try gain')
// //    }
// // }

// // class cat implements A{
// //   hello(): void {
// //       ;
// //   }
// //   yello(): void {
      
// //   }
// // }
// // const fun=new cat();
// // tmp(fun)

// // interface B{
// //    hello():void;
// //    yello():void;
// // }
// // interface C{
// //    hello():void;
// //    caio():void;
// // }
// // function verify(X:string|B|C){
// //    return typeof(<B>X).yello !== 'undefined';
// // }

// // function typChck(variable:string|B|C){
// //    if (verify(variable)){
// //       console.log("chalna jaaa ab!")
// //    }
// //    else if (verify(variable)){
// //       console.log("siyaapa")

// //    }
// //    else {
// //       console.log("type except B and C")
// //    }
// // }
// // typChck("fun")



// interface B{
//    hello():void;
//    yello():void;
// }
// interface C{
//    hello():void;
//    caio():void;
// }

// //typeof it only check primitive type
// //B and C are also interface or types etc.
// //we need a method to classify B and C and rest of the types

// // function verify(arg:string|B|C|number){
// //    return typeof(<B>arg).yello !== 'undefined' 
// // }
// // function verify1(arg:string|B|C|number){
// //    return typeof(<C>arg).caio !== 'undefined' 
// // }

// function typChck(variable:string|B|C|number){
//    if((<B>variable).yello){ //to check B
//       console.log("Type B")
//    }
//    else if((<C>variable).caio){ //to check C
//       console.log("Type C")
//    }
//    else{
//       console.log("Types except B and C")
//    }
// }
// const obj1 : C ={  
//    hello(){
//    },
//    caio(){

//    }
      
//    }
   
// class Better implements B{
//    hello(): void {
       
//    }
//    yello(): void {
       
//    }
// }
// const obj2 = new Better()
// typChck(obj2)


// class Bike{
//    hello(){
//    }
//    yello(){

//    }
// }
// class Cat{
//    hello(){

//    }
//    caio(){

//    }
// }

// function checkClass(argument:Bike|Cat){
//    if (argument instanceof Bike){
//       console.log("brom broom")
//    }
//    else if (argument instanceof Cat){
//       console.log("purr purr")
//    }
//    else {
//       console.log( "thnx for bearing me")
//    }
// }
// const obj11 = new Bike();
// const obj21 = new Cat()
// checkClass(obj11)
// const arr =[1,23,45,60];
// const output = arr.map((X) => X*2)
// console.log(output)

// function isOdd(A:number){
//    return A%2
// }
// const filt = arr.filter(isOdd)
// console.log(filt)

// interface and class , fucntion that will tell if type is interface , class , number or anyother type
// interface A {
//    test :string;
//    twist : null;
//    asign(X:A):string;
// }
// class trys {
//    tin :string;
//    fin: number;
//    constructor(X:string,Y:number){
//       this.tin = X;
//       this.fin=Y;
//    }
//    affirm(A:number):number{
//       return A*2
//    }
// }
// function check(val:trys|A|number|any){
//    if(val instanceof trys){ // instance of is for class
//       console.log("its a class")
//    }
//    else if ((<A>val).asign){  
//       console.log("hakuna matata")
//    }
//    else if (typeof(val) === 'number'){ 
//       console.log("Its a number")
//    }
//    else{
//       console.log('any types')
//    }
// }
// const fie = new trys("help",100)
// const obj :A={
//    test :"string",
//    twist: null,
//    asign(X:A):string{
//       return "hello"
//    }

// }
// check(obj)
// // console.log(check)

///////////////////////////////////////////////////////////////

// Intersection - combining types 
// Union - | intersection - &

// interface A{
//    propt: string;
//    metho():void,
// }

// interface B{
//    menthol():string,
// }

// function typeAll(obj:A&B): A&B{
//    return obj

// }
// const obj :A&B={
//    propt:"string",
//    metho(){
//    },
//    menthol():string{
//       return "hello"
//    }

// }
// class exceeption implements A, B{
//    propt:string;
//    metho(){
//    };
//    constructor(X:string){
//       this.propt=X
   
//    }
//    menthol():string{
//       return "hello"
//    }



// }
// const ret = new exceeption("hello")

// // console.log(ret)
//Combining Objects 

// const object1 : any ={
//    val1:"set",
//    val2: "bet",
//    val3:"too much"
// }
// const object2: any={
//    key1 :"belt",
//    key2: "tilt"


// }
// // const total=object1&object2 //its a statement not possible 

// // within object access values = ... or rest operator

// function combination<object1 extends object, object2 extends object>
// (o1:object1, o2:object2)
// :object1&object2{
//    return{...o1, ...o2}
// }
// console.log(combination(object2,object1))

///////////////////////////////////////////////////////////////

// types aliases

// type allInOne = string | number | string [];
// type superObj = {a:'b'} | {b:'a'};

// type jug<G> = Array<G> | G[];

// type interfaceAlias = {
//    a: number;
//    b :number;
// }



// const x :jug<number>= [881,2,3,]
// const A:interfaceAlias={
//    a:11,
//    b:112
// }

// interface temp {
//    pr:boolean;
// }
// class hex{
//    tt:any;
// }
// type classic= hex|temp

// const shows: classic ={
//    tt:'ss'
// }

/////////////////////////////////////////////////////////////////////////////////

// external-packages


interface X {
    S :number;
    V: string;
}
class pagalpann implements X{
    static Q ="telepathy";
    S : number;
    V :string;
    constructor(A:number,B:string){
        this.S = A;
        this.V = B;
    }
}
const T = new pagalpann(12,"pagal");
console.log(pagalpann.Q);






interface check{
    fruits(): string;
}
const Fruits = (A:check) => A.fruits().toUpperCase();
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
const x: number[] = [23,44,65,86]
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

function Swap(a:number,b:number){
  const  temp =a
    a=b
    b=temp
    return [a,b]

}
let a:number = 10
let b :number = 20
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

function check<T>(arg:T){

}
check(12)



// wirte a function to check if a number is pallindrome or not



let xy : number[] = [1,2,3]
xy[3] = 3
console.log(xy)

let chec :{ xyx: [number,string]} = {xyx: ['jhhj', 1]}



