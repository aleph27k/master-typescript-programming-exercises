"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOddLengthWordsAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.filter((element) => typeof element === 'string' && element.length % 2 !== 0);
}
