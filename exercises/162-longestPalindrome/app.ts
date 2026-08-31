function findLongestPalindrome(sentence: string): string {
  let longest = '';

  for (let i = 0; i < sentence.length; i++) {
    for (let j = i + 1; j <= sentence.length; j++) {
      const substring = sentence.slice(i, j);
      if (isPalindrome(substring) && substring.length >= longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

function reverseString(string: string): string {
  return string.split('').reverse().join('');
}

function isPalindrome(word: string): boolean {
  const lower = word.toLowerCase();
  return lower === reverseString(lower);
}

export {};