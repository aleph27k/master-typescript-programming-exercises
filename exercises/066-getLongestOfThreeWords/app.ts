function getLongestOfThreeWords(word1: string, word2: string, word3: string): string {
  // your code here
  let longest = word1;
  if (word2.length > longest.length) longest = word2;
  if (word3.length > longest.length) longest = word3;
  return longest;
}

export {};