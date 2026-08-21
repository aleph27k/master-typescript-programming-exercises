function countCharacter(str: string, character: string): number {
  let count = 0;
  for (const ch of str) {
    if (ch === character) {
      count++;
    }
  }
  return count;
}

export {};