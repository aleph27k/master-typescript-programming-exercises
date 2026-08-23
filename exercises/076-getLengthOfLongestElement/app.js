"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfLongestElement(arr) {
    // your code here
    if (arr.length === 0)
        return 0;
    return arr.reduce((max, word) => Math.max(max, word.length), 0);
}
