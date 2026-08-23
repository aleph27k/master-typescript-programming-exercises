function getLengthOfLongestElement(arr: string[]): number {
  // your code here
  if (arr.length === 0) return 0;
  return arr.reduce((max, word) => Math.max(max, word.length), 0);
}

export {};