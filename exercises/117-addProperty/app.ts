function addProperty(obj: Record<string, unknown>, key: string): Record<string, unknown> {
  // your code here
  obj[key] = true;
  return obj;
}

export {};