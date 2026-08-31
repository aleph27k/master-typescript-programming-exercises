"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertObjectToList(obj) {
    const result = [];
    for (const key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}
