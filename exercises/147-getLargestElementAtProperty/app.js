"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestElementAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    return Math.max(...arr.map(element => Number(element) || 0));
}
