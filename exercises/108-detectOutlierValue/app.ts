function detectOutlierValue(string: string): number {
  // your code here
  const nums = string.split(/\s+/).filter(s => s.length > 0).map(n => Number(n));
  const evens = nums.filter(n => n % 2 === 0);
  const odds = nums.filter(n => n % 2 !== 0);

  const outlier = evens.length < odds.length ? evens[0] : odds[0];
  return nums.indexOf(outlier) + 1;
}

export {};