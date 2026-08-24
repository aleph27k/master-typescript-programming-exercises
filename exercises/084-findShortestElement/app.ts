function findShortestElement(arr: string[]): string {
  // your code here
  if (arr.length === 0) return '';
  return arr.reduce((shortest, word) =>
    word.length < shortest.length ? word : shortest
  );
}

export {};