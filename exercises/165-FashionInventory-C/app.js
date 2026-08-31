"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderInventory(inventory) {
    const result = [];
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
