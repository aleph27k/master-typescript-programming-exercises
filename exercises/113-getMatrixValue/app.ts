function getMatrixValue(matrix: unknown[][], row: number, col: number) {
  // your code here
  if (row < 0 || row >= matrix.length) return undefined;
  const targetRow = matrix[row];
  if (col < 0 || col >= targetRow.length) return undefined;
  return targetRow[col];
}

export {};