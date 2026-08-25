"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsThatEqual10AtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.filter(element => element == 10);
}
