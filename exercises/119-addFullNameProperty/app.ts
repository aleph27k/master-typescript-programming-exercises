function addFullNameProperty(obj: { firstName: string; lastName: string }): { firstName: string; lastName: string; fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  };
}

export {};