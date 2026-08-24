"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRotated(str1, str2) {
    // your code here
    if (str1.length !== str2.length)
        return false;
    return (str1 + str1).includes(str2);
}
