"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestNumberAmongMixedElements(arr) {
    // your code here
    const numbers = arr.filter((item) => typeof item === 'number');
    if (numbers.length === 0)
        return 0;
    return numbers.reduce((max, num) => Math.max(max, num));
}
