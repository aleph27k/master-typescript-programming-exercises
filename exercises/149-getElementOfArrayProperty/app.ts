function getElementOfArrayProperty(obj: Record<string, unknown>, key: string, index: number): string | undefined {
  const arr = obj[key];
  if (!Array.isArray(arr) || index < 0 || index >= arr.length) {
    return undefined;
  }
  return arr[index] as string;
}

export {};
