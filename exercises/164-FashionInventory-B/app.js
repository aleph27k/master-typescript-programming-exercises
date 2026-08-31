"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderAverageCostPerDesigner(inventory) {
    const result = [];
    for (let i = 0; i < inventory.length; i++) {
        const designer = inventory[i];
        let total = 0;
        for (let j = 0; j < designer.shoes.length; j++) {
            total += designer.shoes[j].price;
        }
        const averagePrice = total / designer.shoes.length;
        result.push({
            name: designer.name,
            averagePrice: averagePrice
        });
    }
    return result;
}
