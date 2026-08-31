class PhoneNumberFormatter {
  private numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  render(): string {
    return `${this.parenthesize(this.getAreaCode())} ${this.getExchangeCode()}-${this.getLineNumber()}`;
  }

  private getAreaCode(): string {
    return this.slice(0, 3);
  }

  private getExchangeCode(): string {
    return this.slice(3, 6);
  }

  private getLineNumber(): string {
    return this.slice(6, 10);
  }

  private parenthesize(str: string): string {
    return `(${str})`;
  }

  private slice(start: number, end: number): string {
    return this.numbers.slice(start, end).join('');
  }
}

// Example usage:
// const output = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
// console.log(output); // --> "(650) 835-9172"