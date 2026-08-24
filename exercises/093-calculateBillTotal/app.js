"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const tax = preTaxAndTipAmount * 0.095;
    const tip = preTaxAndTipAmount * 0.15;
    return preTaxAndTipAmount + tax + tip;
}
