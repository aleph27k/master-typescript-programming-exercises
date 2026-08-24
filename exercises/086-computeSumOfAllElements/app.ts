function computeSumOfAllElements(arr: number[]): number {
  // your code here
  return arr.reduce((sum, num) => sum + num, 0);
}

export {};