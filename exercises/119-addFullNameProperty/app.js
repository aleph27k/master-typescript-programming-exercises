"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFullNameProperty(obj) {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    };
}
