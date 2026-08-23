function getAllElementsButNth(arr: number[], n: number): number[] {
  // your code here
  const copy = [...arr];
  copy.splice(n, 1);
  return copy;
}

export {};