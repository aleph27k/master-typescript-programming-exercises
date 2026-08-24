"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findPairForSum(array, number) {
    // your code here
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}
