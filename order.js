// import { IOrder, calculateTotalAmount } from './calculate-total-amount';
function nest(order) {
    return "my name is" + order.myfunction();
}
var net = /** @class */ (function () {
    function net() {
    }
    net.prototype.myfunction = function () {
        return "vishav";
    };
    return net;
}());
var objet = new net();
console.log(nest(objet));
