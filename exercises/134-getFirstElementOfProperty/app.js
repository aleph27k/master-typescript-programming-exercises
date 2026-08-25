"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElementOfProperty(obj, key) {
    const arr = obj[key];
    if (Array.isArray(arr) && arr.length > 0) {
        return arr[0];
    }
    return undefined;
}
