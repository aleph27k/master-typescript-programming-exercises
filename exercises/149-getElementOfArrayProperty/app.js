"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementOfArrayProperty(obj, key, index) {
    const arr = obj[key];
    if (!Array.isArray(arr) || index < 0 || index >= arr.length) {
        return undefined;
    }
    return arr[index];
}
