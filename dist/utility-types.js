"use strict";
// in typescript typescript provides  some utilities, that are useful
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// // Partial Types
// interface star{
//     name: string;
//     enable: boolean
// }
// const shineStar = (argu: Partial<star>) => {};
// shineStar({
//     name:'Shumail the explorer',
//     enable: true
// })
// Required types
// interface star{
//     name?: string
//     enable: boolean
// }
// const shineStar = (argu: Required<star>) => {};
// shineStar({
//     name:'Shumail the explorer',
//     enable: true
// })
// // ReadOnly TYpe
// interface B{
//     x: number
// }
// // const func = (obj:B) => {}
// const obje :Readonly<B> = {
//     x : 10
// }
// obje.x = 13 // can't change value of interface property x
// Record Type
// keys and values
// interface temp{
//     fruit: string;
//     cost : number;
// }
// const checktemp = (id:number, cart:temp) =>{
// }
// checktemp(1, {fruit:"apple", cost:200})
// // 1. banana = 80
// // 2. 
// const recordTemp : Record<string,temp> = {
//     "1": {fruit:"apple", cost:200},
//     "2": {fruit:'oranges', cost:120}
// }
// console.log(recordTemp["2"])
// Pick Type
// interface temp{
//     fruit: string;
//     cost : number;
// }
// type hashedout = Pick<temp,'fruit'>
// Omit Type
// interface temp{
//     fruit: string;
//     cost : number;
// }
// type hashedout = Omit<temp,'fruit'>
// // Exclude Utility type
// type ShumailTraits =  boolean | 'natkhat' | 'shorwali';
// type Vishav = Exclude<ShumailTraits, 'shorwali'>
// NOTE 
// // if you want to assign uinioned types can't initialize that variable with const
// const x : ShumailTraits
// let y :ShumailTraits
// interface addVals{
//     array ?: 'shumail' | 'shum' | 'shu';
// }
// function nulladd(org:addVals['array']){}
// function addd(or:NonNullable<addVals['array']>){}
// nulladd(undefined)
// addd(undefined)
