function multiply(num1: number, num2: number): number {
  // your code here
  let result = 0;
  const positiveCount = Math.abs(num2);
  for (let i = 0; i < positiveCount; i++) {
    result += num1;
  }
  if (num2 < 0) result = -result;
  return result;
}

export {};