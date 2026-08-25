"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAverageOfElementsAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((acc, val) => acc + (Number(val) || 0), 0);
    return sum / arr.length;
}
