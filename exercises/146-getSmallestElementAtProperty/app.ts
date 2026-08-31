function getSmallestElementAtProperty(obj: Record<string, unknown>, key: string): number | [] {
  const arr = obj[key];
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return Math.min(...arr);
}
export {};