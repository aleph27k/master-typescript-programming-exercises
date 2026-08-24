"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flipPairs(input) {
    // your code here
    let result = '';
    for (let i = 0; i < input.length; i += 2) {
        const first = input.slice(i, i + 1);
        const second = input.slice(i + 1, i + 2);
        result += second + first;
    }
    return result;
}
