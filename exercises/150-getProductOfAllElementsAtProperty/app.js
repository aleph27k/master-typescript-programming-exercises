"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProductOfAllElementsAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    return arr.reduce((acc, val) => acc * (Number(val) || 0), 1);
}
