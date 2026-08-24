"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestWordOfMixedElements(arr) {
    // your code here
    const strings = arr.filter((item) => typeof item === 'string');
    if (strings.length === 0)
        return '';
    let longest = strings[0];
    for (const word of strings) {
        if (word.length > longest.length)
            longest = word;
    }
    return longest;
}
