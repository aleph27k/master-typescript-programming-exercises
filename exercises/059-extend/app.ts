function extend(obj1: Record<string, unknown>, obj2: Record<string, unknown>): Record<string, unknown> {
  // your code here
  for (const key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

export {};