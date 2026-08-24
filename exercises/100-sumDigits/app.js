"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumDigits(num) {
    // your code here
    const str = Math.abs(num).toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let digit = Number(str[i]);
        if (i === 0 && num < 0)
            digit = -digit;
        sum += digit;
    }
    return sum;
}
