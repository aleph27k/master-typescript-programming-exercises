"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestElement(arr) {
    // your code here
    if (arr.length === 0)
        return 0;
    return arr.reduce((max, num) => Math.max(max, num));
}
