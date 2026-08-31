function fromListToObject(array: unknown[]): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const pair of array) {
    if (Array.isArray(pair) && pair.length >= 2) {
      result[String(pair[0])] = pair[1];
    }
  }
  return result;
}

export {};