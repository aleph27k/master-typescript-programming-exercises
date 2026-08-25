"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElementOfProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
