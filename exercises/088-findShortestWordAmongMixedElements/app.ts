function findShortestWordAmongMixedElements(arr: unknown[]): string {
  // your code here
  const strings = arr.filter((item): item is string => typeof item === 'string');
  if (strings.length === 0) return '';
  let shortest = strings[0];
  for (const word of strings) {
    if (word.length < shortest.length) shortest = word;
  }
  return shortest;
}

export {};