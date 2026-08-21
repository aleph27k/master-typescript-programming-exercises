function checkAge(name: string, age: number): string {
  if (age < 21) {
    return `Go home, ${name}!`;
  }
  return `Welcome, ${name}!`;
}

export {};
