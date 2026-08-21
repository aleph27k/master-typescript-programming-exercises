function getStringLength(str: string): number {
  let count = 0;
  while (str.slice(count, count + 1) !== '') {
    count++;
  }
  return count;
}

export {};