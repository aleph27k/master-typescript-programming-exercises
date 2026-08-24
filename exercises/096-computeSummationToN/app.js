"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeSummationToN(n) {
    // your code here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
