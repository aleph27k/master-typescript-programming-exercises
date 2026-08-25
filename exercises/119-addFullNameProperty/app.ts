function addFullNameProperty(obj: Record<string, unknown>): Record<string, unknown> {
  // your code here
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
  return obj;
}

export {};