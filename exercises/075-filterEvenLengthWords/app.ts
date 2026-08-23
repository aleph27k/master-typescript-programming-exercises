function filterEvenLengthWords(words: string[]): string[] {
  // your code here
  return words.filter(word => word.length % 2 === 0);
}

export {};