function getEvenLengthWordsAtProperty(obj: Record<string, unknown>, key: string): string[] {
  const arr = obj[key];
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((element): element is string => typeof element === 'string' && element.length % 2 === 0);
}

export {};