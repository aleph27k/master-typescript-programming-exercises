function convertObjectToList(obj: Record<string, unknown>): unknown[][] {
  const result: unknown[][] = [];
  for (const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

export {};