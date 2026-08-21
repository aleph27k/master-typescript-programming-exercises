"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(name, age) {
    if (age < 21) {
        return `Go home, ${name}!`;
    }
    return `Welcome, ${name}!`;
}
