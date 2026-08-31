"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformFirstAndLast(array) {
    const result = {};
    result[String(array[0])] = array[array.length - 1];
    return result;
}
