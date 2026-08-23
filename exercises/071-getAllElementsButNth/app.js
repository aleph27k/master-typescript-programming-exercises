"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllElementsButNth(array, n) {
    const result = array.slice(); // create a shallow copy so we don't mutate the original
    result.splice(n, 1); // remove 1 element at index n
    return result;
}
