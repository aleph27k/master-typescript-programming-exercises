"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listAllValues(obj) {
    const values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }
    return values;
}
