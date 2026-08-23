function getIndexOf(char: string, str: string): number {
  // your code here
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 1) === char) {
      return i;
    }
  }
  return -1;
}

export {};