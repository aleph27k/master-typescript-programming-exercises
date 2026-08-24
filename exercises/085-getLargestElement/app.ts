function getLargestElement(arr: number[]): number {
  // your code here
  if (arr.length === 0) return 0;
  return arr.reduce((max, num) => Math.max(max, num));
}

export {};