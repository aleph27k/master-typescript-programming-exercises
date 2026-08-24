function getLongestWordOfMixedElements(arr: unknown[]): string {
  // your code here
  const strings = arr.filter((item): item is string => typeof item === 'string');
  if (strings.length === 0) return '';
  let longest = strings[0];
  for (const word of strings) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

export {};