function computeCompoundInterest(
  principal: number,
  interestRate: number,
  compoundingFrequency: number,
  timeInYears: number
): number {
  // your code here
  const amount =
    principal *
    Math.pow(1 + interestRate / compoundingFrequency, compoundingFrequency * timeInYears);
  return amount - principal;
}

export {};