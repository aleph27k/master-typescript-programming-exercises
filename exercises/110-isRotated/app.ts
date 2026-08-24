function isRotated(str1: string, str2: string): boolean {
  // your code here
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

export {};