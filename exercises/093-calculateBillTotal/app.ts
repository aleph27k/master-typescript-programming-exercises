function calculateBillTotal(preTaxAndTipAmount: number): number {
  // your code here
  const tax = preTaxAndTipAmount * 0.095;
  const tip = preTaxAndTipAmount * 0.15;
  return preTaxAndTipAmount + tax + tip;
}

export {};