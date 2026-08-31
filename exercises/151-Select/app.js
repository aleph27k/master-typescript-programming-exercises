"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function select(arr, obj) {
    const result = {};
    for (const key of arr) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}
