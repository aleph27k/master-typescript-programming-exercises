"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0)
        return 0;
    return arr.reduce((min, num) => Math.min(min, num));
}
