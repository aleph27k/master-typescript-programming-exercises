function getNthElementOfProperty(obj: Record<string, unknown>, key: string, n: number): unknown | undefined {
  const arr = obj[key];
  if (!Array.isArray(arr) || n < 0 || n >= arr.length) {
    return undefined;
  }
  return arr[n];
}

export {};