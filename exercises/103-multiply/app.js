"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(num1, num2) {
    if (num1 === 0 || num2 === 0)
        return 0;
    const isNegative = (num1 < 0) !== (num2 < 0);
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return isNegative ? -result : result;
}
