"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNthElementOfProperty(obj, key, n) {
    const arr = obj[key];
    if (!Array.isArray(arr) || n < 0 || n >= arr.length) {
        return undefined;
    }
    return arr[n];
}
