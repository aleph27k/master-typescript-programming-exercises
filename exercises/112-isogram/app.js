"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIsogram(text) {
    // your code here
    const lower = text.toLowerCase();
    const seen = new Set();
    for (const char of lower) {
        if (seen.has(char))
            return false;
        seen.add(char);
    }
    return true;
}
