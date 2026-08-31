function getSumOfAllElementsAtProperty(obj: Record<string, unknown>, key: string): number {
  const arr = obj[key];
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, val) => acc + (Number(val) || 0), 0);
}

export {};