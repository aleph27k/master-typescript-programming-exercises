"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestElement(arr) {
    // your code here
    if (arr.length === 0)
        return '';
    return arr.reduce((longest, word) => word.length > longest.length ? word : longest);
}
