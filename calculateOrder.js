"use strict";
exports.__esModule = true;
exports.calculatetotalOrder = void 0;
function calculatetotalOrder(order) {
    var total = order.calculatetotal();
    var discount = total * .1;
    total -= discount;
    var tax = total * .2;
    total += tax;
    return total;
}
exports.calculatetotalOrder = calculatetotalOrder;
var Fruits = function (A) { return A.fruits().toUpperCase(); };
var eel = /** @class */ (function () {
    function eel() {
    }
    eel.prototype.fruits = function () {
        return "uluu ki dumm";
    };
    return eel;
}());
var R = new eel();
console.log(Fruits(R));
