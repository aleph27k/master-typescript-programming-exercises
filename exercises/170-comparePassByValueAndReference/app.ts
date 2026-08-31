interface ComparisonResult {
  original: unknown;
  copy: unknown;
  sameReference: boolean;
}

function comparePassByValueAndReference(input: unknown): ComparisonResult {
  const copy =
    typeof input === 'object' && input !== null ? { ...(input as object) } : input;
  return { original: input, copy, sameReference: input === copy };
}

export {};
