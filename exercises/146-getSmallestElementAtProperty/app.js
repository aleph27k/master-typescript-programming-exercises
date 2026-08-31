"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSmallestElementAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    return Math.min(...arr);
}
