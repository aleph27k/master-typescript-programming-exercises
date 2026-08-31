"use strict";
class PhoneNumberFormatter {
    constructor(numbers) {
        this.numbers = numbers;
    }
    render() {
        return `${this.parenthesize(this.getAreaCode())} ${this.getExchangeCode()}-${this.getLineNumber()}`;
    }
    getAreaCode() {
        return this.slice(0, 3);
    }
    getExchangeCode() {
        return this.slice(3, 6);
    }
    getLineNumber() {
        return this.slice(6, 10);
    }
    parenthesize(str) {
        return `(${str})`;
    }
    slice(start, end) {
        return this.numbers.slice(start, end).join('');
    }
}
// Example usage:
// const output = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
// console.log(output); // --> "(650) 835-9172"
