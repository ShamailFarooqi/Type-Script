 export interface IOrder{
    calculatetotal() :number;
}
export  function calculatetotalOrder(order : IOrder){
    let total = order.calculatetotal();
    const discount = total * .1;
    total -= discount;
    const tax = total * .2;
    total += tax ;
    return total;
}














interface check{
    fruits(): string;
}
const Fruits = (A:check) => A.fruits().toUpperCase();
class eel implements check{
     fruits() {
        return "uluu ki dumm"
     }
    
}

const R =new eel();
console.log(Fruits(R))