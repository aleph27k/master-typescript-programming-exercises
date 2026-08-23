function findSmallestElement(arr: number[]): number {
  // your code here
  if (arr.length === 0) return 0;
  return arr.reduce((min, num) => Math.min(min, num));
}

export {};