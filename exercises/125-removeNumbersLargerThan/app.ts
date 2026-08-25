function removeNumbersLargerThan(num: number, obj: Record<string, unknown>): Record<string, unknown> {
  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] > num) {
      delete obj[key];
    }
  }
  return obj;
}

export {};