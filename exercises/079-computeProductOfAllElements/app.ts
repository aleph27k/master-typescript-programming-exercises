function computeProductOfAllElements(arr: number[]): number {
  // your code here
  if (arr.length === 0) return 0;
  return arr.reduce((product, num) => product * num, 1);
}

export {};