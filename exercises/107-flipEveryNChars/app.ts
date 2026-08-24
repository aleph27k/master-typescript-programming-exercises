function flipEveryNChars(input: string, n: number): string {
  // your code here
  let result = '';
  for (let i = 0; i < input.length; i += n) {
    const block = input.slice(i, i + n);
    let reversed = '';
    for (let j = block.length - 1; j >= 0; j--) {
      reversed += block.slice(j, j + 1);
    }
    result += reversed;
  }
  return result;
}

export {};