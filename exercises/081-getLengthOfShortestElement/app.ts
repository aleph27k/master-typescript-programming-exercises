function getLengthOfShortestElement(arr: string[]): number {
  // your code here
  if (arr.length === 0) return 0;
  return arr.reduce((min, word) => Math.min(min, word.length), Infinity);
}

export {};