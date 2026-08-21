"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAverageOfNumbers(nums) {
    if (nums.length === 0)
        return 0;
    return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}
