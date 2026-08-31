function countAllCharacters(str: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const ch of str) {
    result[ch] = (result[ch] || 0) + 1;
  }
  return result;
}

export {};