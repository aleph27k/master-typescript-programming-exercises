function computeSumBetween(num1: number, num2: number): number {
  // your code here
  if (num2 <= num1) return 0;
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

export {};