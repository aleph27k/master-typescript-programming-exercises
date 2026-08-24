function convertScoreToGradeWithPlusAndMinus(score: number): string {
  // your code here
  if (score > 100 || score < 0) return 'INVALID SCORE';
  if (score >= 90) {
    if (score >= 98) return 'A+';
    if (score <= 92) return 'A-';
    return 'A';
  }
  if (score >= 80) {
    if (score >= 88) return 'B+';
    if (score <= 82) return 'B-';
    return 'B';
  }
  if (score >= 70) {
    if (score >= 78) return 'C+';
    if (score <= 72) return 'C-';
    return 'C';
  }
  if (score >= 60) {
    if (score >= 68) return 'D+';
    if (score <= 62) return 'D-';
    return 'D';
  }
  return 'F';
}

export {};