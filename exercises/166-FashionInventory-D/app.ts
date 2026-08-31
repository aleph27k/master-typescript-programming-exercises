interface Shoe {
  name: string;
  price: number;
}

interface InventoryItem {
  name: string;
  shoes: Shoe[];
}

interface LaceNameData {
  nameWords: string[];
  targetWordIndex: number;
}

function getLaceNameDataForShoes(inventory: InventoryItem[]): LaceNameData[] {
  const result: LaceNameData[] = [];

  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      const shoe = designer.shoes[j];
      const lowerName = shoe.name.toLowerCase();

      if (lowerName.includes('lace')) {
        const nameWords = shoe.name.split(' ');
        let targetWordIndex = -1;

        for (let k = 0; k < nameWords.length; k++) {
          if (nameWords[k].toLowerCase().includes('lace')) {
            targetWordIndex = k;
            break;
          }
        }

        result.push({
          nameWords: nameWords,
          targetWordIndex: targetWordIndex
        });
      }
    }
  }

  return result;
}

export {};