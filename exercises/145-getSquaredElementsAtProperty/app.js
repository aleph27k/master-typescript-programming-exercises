"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSquaredElementsAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.map(element => (Number(element) || 0) * (Number(element) || 0));
}
