function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  // your code here
  return obj[key];
}

export {};