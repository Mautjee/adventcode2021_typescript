"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partOne = void 0;
const logic_1 = require("./logic");
function partOne(data) {
    //Define best sheet
    let bestSheet = { unmarktNumnerTotal: 0, finalInputNumber: 1000, sheetScore: 0 };
    data.sheets.forEach(s => {
        let newRound = (0, logic_1.checkSheet)(s, data.input);
        if (bestSheet.finalInputNumber > newRound.finalInputNumber) {
            bestSheet = newRound;
        }
    });
    return bestSheet.unmarktNumnerTotal * bestSheet.sheetScore;
}
exports.partOne = partOne;
//# sourceMappingURL=partOne.js.map