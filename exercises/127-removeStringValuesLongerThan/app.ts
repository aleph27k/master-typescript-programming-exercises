function removeStringValuesLongerThan(num: number, obj: Record<string, unknown>): Record<string, unknown> {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length > num) {
      delete obj[key];
    }
  }
  return obj;
}

export {};