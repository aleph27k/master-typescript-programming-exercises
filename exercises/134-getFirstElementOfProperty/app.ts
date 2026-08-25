function getFirstElementOfProperty(obj: Record<string, unknown>, key: string): number | undefined {
  const arr = obj[key];
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0] as number;
  }
  return undefined;
}

export {};