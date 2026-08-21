"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStringLength(str) {
    let count = 0;
    while (str.slice(count, count + 1) !== '') {
        count++;
    }
    return count;
}
