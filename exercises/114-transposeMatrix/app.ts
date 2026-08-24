function transposeMatrix(matrix: unknown[][]): unknown[][] {
  // your code here
  if (matrix.length === 0) return [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: unknown[][] = [];
  for (let j = 0; j < cols; j++) {
    const newRow: unknown[] = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

export {};