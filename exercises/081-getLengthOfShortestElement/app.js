"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0)
        return 0;
    return arr.reduce((min, word) => Math.min(min, word.length), Infinity);
}
