function getLargestNumberAmongMixedElements(arr: unknown[]): number {
  // your code here
  const numbers = arr.filter((item): item is number => typeof item === 'number');
  if (numbers.length === 0) return 0;
  return numbers.reduce((max, num) => Math.max(max, num));
}

export {};
