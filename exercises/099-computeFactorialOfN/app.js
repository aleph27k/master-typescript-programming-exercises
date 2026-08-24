"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeFactorialOfN(n) {
    // your code here
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
