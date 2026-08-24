"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestWordAmongMixedElements(arr) {
    // your code here
    const strings = arr.filter((item) => typeof item === 'string');
    if (strings.length === 0)
        return '';
    let shortest = strings[0];
    for (const word of strings) {
        if (word.length < shortest.length)
            shortest = word;
    }
    return shortest;
}
