function getElementsThatEqual10AtProperty(obj: Record<string, unknown>, key: string): unknown[] {
  const arr = obj[key];
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(element => element == 10);
}

export {};