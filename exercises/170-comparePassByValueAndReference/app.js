"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comparePassByValueAndReference(input) {
    const copy = typeof input === 'object' && input !== null ? { ...input } : input;
    return { original: input, copy, sameReference: input === copy };
}
