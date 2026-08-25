"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOddElementsAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.filter(element => typeof element === 'number' && element % 2 !== 0);
}
