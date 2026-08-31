"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllKeys(obj) {
    const keys = [];
    for (const key in obj) {
        keys.push(key);
    }
    return keys;
}
