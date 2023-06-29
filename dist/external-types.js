"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// namespace - is a collection of functions , interface , classes, etc etc.
var hex;
(function (hex) {
    function test() {
        console.log('jello');
    }
    hex.test = test;
})(hex || (hex = {}));
hex.test();
