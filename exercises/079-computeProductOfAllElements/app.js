"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeProductOfAllElements(arr) {
    // your code here
    if (arr.length === 0)
        return 0;
    return arr.reduce((product, num) => product * num, 1);
}
