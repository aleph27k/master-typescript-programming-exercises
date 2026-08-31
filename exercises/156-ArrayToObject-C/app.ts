function transformEmployeeData(array: unknown[]): Record<string, unknown>[] {
  return array.map(employee =>
    employee.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {} as Record<string, unknown>)
  );
}

export {};