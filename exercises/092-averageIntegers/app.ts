function average(arr: number[]): number {
  // your code here
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

function sum(arr: number[]): number {
  // your code here
  return arr.reduce((total, num) => total + num, 0);
}

export {};