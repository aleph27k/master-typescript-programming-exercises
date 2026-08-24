"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMatrixValue(matrix, row, col) {
    // your code here
    if (row < 0 || row >= matrix.length)
        return undefined;
    const targetRow = matrix[row];
    if (col < 0 || col >= targetRow.length)
        return undefined;
    return targetRow[col];
}
