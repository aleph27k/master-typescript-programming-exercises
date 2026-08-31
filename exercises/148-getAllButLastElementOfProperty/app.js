"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllButLastElementOfProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    return arr.slice(0, -1);
}
