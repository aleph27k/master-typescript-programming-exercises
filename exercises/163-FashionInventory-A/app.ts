interface Shoe {
  name: string;
  price: number;
}

interface InventoryItem {
  name: string;
  shoes: Shoe[];
}

function renderInventory(inventory: InventoryItem[]): unknown[][] {
  const result: unknown[][] = [];

  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      const shoe = designer.shoes[j];
      result.push([designer.name, shoe.name, shoe.price]);
    }
  }

  return result;
}

export {};