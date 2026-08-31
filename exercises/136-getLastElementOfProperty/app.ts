function getLastElementOfProperty(obj: Record<string, unknown>, key: string): unknown {
  const arr = obj[key];

  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  return arr[arr.length - 1];
}

export {};