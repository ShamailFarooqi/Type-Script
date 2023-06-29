// enum  color{
//     red,
//     green,
//     blue
// }
// let myfavcolor : color.blue;
// console.log(color.blue, color.red, color.green);
// interface profile {
//     name : string,
//     age?: number,
// }
// let profile : profile = {
//     name:"john"
// }
// function sum(a : number, b?:number) :number{
//     return a+(b || 0);
// }
// sum(1);
// const sum2 = myfunc = (a,b?) => a+b;
// sum2(1);
const everything = (...numbers) => numbers.reduce((res, num) => res + num, 0);
everything(1, 2, 3, 4);
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
