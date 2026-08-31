function transformFirstAndLast(array: unknown[]): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  result[String(array[0])] = array[array.length - 1];
  return result;
}

export {};