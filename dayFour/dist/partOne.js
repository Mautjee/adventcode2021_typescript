import { Sheet } from './Models';
export function partOne(data) {
    let BestSheet = new Sheet();
    let lowestNumber = 0;
    // Loop though all the avalible sheets
    for (let i = 0; i < data.sheets.length; i++) {
        //
        checkSheet(data.sheets[i], data.input);
    }
    return 990000;
}
function checkSheet(sheet, input) {
    const numberToCheck = sheet.horizontal.concat(sheet.vertical);
    numberToCheck.forEach(row => {
        let find = row.listNumber.find(elem => elem == input[1]);
        let findq = null;
    });
    return [, 0];
}
export function sum(a, b) {
    return a + b;
}
//# sourceMappingURL=partOne.js.map