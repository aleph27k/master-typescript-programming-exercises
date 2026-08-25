function getEvenElementsAtProperty(obj: Record<string, unknown>, key: string): unknown[] {
  const arr = obj[key];
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(element => typeof element === 'number' && element % 2 === 0);
}

export {};