"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyBetween(num1, num2) {
    // your code here
    if (num2 <= num1)
        return 0;
    let product = 1;
    for (let i = num1; i < num2; i++) {
        product *= i;
    }
    return product;
}
