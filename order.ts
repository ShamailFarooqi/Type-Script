// import { IOrder, calculateTotalAmount } from './calculate-total-amount';

// export class Order implements IOrder {
//   calculateTotal(): number {
//       return 100
//   }
   
// }
// const obj = new Order;

// console.log(calculateTotalAmount(obj));
interface Ipractice {
  myfunction (): string;
  
}
 function nest(order:Ipractice){
  return "my name is" + order.myfunction()

 }
class net implements Ipractice {
  myfunction() {
      return "vishav"
  }
}
const objet = new net();
console.log(nest(objet));