"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeOddValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 !== 0) {
            delete obj[key];
        }
    }
    return obj;
}
