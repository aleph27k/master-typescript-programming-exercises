function findShortestOfThreeWords(word1: string, word2: string, word3: string): string {
  // your code here
  let shortest = word1;
  if (word2.length < shortest.length) shortest = word2;
  if (word3.length < shortest.length) shortest = word3;
  return shortest;
}

export {};