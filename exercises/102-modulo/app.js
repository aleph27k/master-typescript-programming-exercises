"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modulo(num1, num2) {
    // your code here
    if (Number.isNaN(num1) || Number.isNaN(num2))
        return NaN;
    if (num2 === 0)
        return NaN;
    if (num1 === 0)
        return 0;
    const quotient = Math.trunc(num1 / num2);
    return num1 - quotient * num2;
}
