"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transposeMatrix(matrix) {
    // your code here
    if (matrix.length === 0)
        return [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}
