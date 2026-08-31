interface Shoe {
  name: string;
  price: number;
}

interface InventoryItem {
  name: string;
  shoes: Shoe[];
}

function renderInventory(inventory: InventoryItem[]): (string | number)[][] {
  const result: (string | number)[][] = [];

  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      const shoe = designer.shoes[j];
      if (shoe.name.toLowerCase().includes('black')) {
        result.push([designer.name, shoe.name, shoe.price]);
      }
    }
  }

  return result;
}

export {};