"use strict";
exports.__esModule = true;
exports.calculateTotalAmount = void 0;
function calculateTotalAmount(order) {
    var total = order.calculateTotal();
    var discount = total * 0.1;
    total -= discount;
    var tax = total * 0.2;
    total += tax;
    return total;
}
exports.calculateTotalAmount = calculateTotalAmount;
