function removeElement<T>(arr: T[], discarder: T): T[] {
  // your code here
  return arr.filter(item => item !== discarder);
}

export {};