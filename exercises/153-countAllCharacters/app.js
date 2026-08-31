"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countAllCharacters(str) {
    const result = {};
    for (const ch of str) {
        result[ch] = (result[ch] || 0) + 1;
    }
    return result;
}
