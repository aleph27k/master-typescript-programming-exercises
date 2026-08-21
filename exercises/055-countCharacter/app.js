"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countCharacter(str, character) {
    let count = 0;
    for (const ch of str) {
        if (ch === character) {
            count++;
        }
    }
    return count;
}
