"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function average(arr) {
    // your code here
    if (arr.length === 0)
        return 0;
    return sum(arr) / arr.length;
}
function sum(arr) {
    // your code here
    return arr.reduce((total, num) => total + num, 0);
}
