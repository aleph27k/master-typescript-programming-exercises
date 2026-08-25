function getSquaredElementsAtProperty(obj: Record<string, unknown>, key: string): unknown[] {
  const arr = obj[key];
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map(element => (Number(element) || 0) * (Number(element) || 0));
}

export {};