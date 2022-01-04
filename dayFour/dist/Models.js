////////////////////////////////////////////////////////////////
/*
    Models
*/
////////////////////////////////////////////////////////////////
class Row {
    listNumber;
    counter;
    constructor(number) {
        this.listNumber = number;
        this.counter = 0;
    }
}
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
}
export { Row, Sheet };
//# sourceMappingURL=Models.js.map