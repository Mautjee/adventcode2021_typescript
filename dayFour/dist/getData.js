"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const fs = __importStar(require("fs"));
const Models_1 = require("./Models");
function getData(localFilePath) {
    let data = fs.readFileSync(localFilePath).toString('utf-8');
    let textByLine = data.split("\n");
    let input = textByLine.splice(0, 2)[0].split(",");
    let sheets = getSheetsFromData(textByLine);
    return {
        input: input,
        sheets: sheets
    };
}
exports.getData = getData;
function getSheetsFromData(rawData) {
    //fiter out the white spaces using regex
    let sheetsData = rawData.filter(function (str) { return /\S/.test(str); });
    //length is the lengt of the total of sheets
    let length = rawData.filter(i => i == '').length;
    let sheetList = [];
    // Loops throug list of raw data sheets
    for (let i = 0; i < length; i++) {
        //data sheet is list of strings whit the Bingo sheet data
        let curSheet = sheetsData.splice(0, 5);
        //create new single sheet
        let sheet = new Models_1.Sheet();
        //loop throug the list 
        curSheet.forEach(l => {
            // and split each line on white space with RegEx expressiom
            //These become the horizontal lines
            sheet.addRow(new Models_1.Row(l.split(/\s+/)));
        });
        //this function extracts the verticle lines from the horizontal lines
        sheetList.push(getVerticleNumbers(sheet));
    }
    return sheetList;
}
function getVerticleNumbers(sheet) {
    // loop throug the list of horizontal lines
    for (let i = 0; i < 5; i++) {
        // nRow is temprary storage for new verticle line
        let nRow = [];
        sheet.horizontal.forEach(l => {
            nRow.push(l.listNumber[i]);
        });
        sheet.addRow(new Models_1.Row(nRow), false);
    }
    return sheet;
}
//# sourceMappingURL=getData.js.map