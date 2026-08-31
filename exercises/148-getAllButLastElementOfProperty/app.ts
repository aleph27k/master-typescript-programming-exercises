function getAllButLastElementOfProperty(obj: Record<string, unknown>, key: string): unknown[] {
  const arr = obj[key];
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.slice(0, -1);
}

export {};