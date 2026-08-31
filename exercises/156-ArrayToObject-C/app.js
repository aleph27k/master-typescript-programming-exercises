"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformEmployeeData(array) {
    return array.map(employee => employee.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {}));
}
