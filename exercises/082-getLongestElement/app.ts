function getLongestElement(arr: string[]): string {
  // your code here
  if (arr.length === 0) return '';
  return arr.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}

export {};