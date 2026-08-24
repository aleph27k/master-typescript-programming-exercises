function isIsogram(text: string): boolean {
  // your code here
  const lower = text.toLowerCase();
  const seen = new Set<string>();
  for (const char of lower) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}

export {};