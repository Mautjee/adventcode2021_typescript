"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheet = exports.Row = void 0;
class Row {
    listNumber;
    counter;
    constructor(number) {
        this.listNumber = number;
        this.counter = 0;
    }
}
exports.Row = Row;
class Sheet {
    vertical;
    horizontal;
    constructor() {
        this.horizontal = [];
        this.vertical = [];
    }
    addRow(nRow, isHorizontal = true) {
        if (isHorizontal) {
            this.horizontal.push(nRow);
        }
        else {
            this.vertical.push(nRow);
        }
    }
    getSheetNumbers() {
        let list = [];
        for (let i = 0; i < this.horizontal.length; i++)
            this.horizontal.forEach(l => {
                list.push(l.listNumber[i]);
            });
        return list;
    }
}
exports.Sheet = Sheet;
//# sourceMappingURL=Models.js.map