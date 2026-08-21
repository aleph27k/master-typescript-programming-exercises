function addToFront<T>(arr: T[], element: T): T[] {
  arr.unshift(element);
  return arr;
}

export {};