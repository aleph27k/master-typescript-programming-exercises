function removeOddValues(obj: Record<string, unknown>): Record<string, unknown> {
  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 !== 0) {
      delete obj[key];
    }
  }
  return obj;
}

export {};