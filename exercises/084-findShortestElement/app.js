"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestElement(arr) {
    // your code here
    if (arr.length === 0)
        return '';
    return arr.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
}
