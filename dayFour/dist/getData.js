import * as fs from 'fs';
import { Sheet, Row } from './Models';
export function getData(localFilePath) {
    let data = fs.readFileSync(localFilePath).toString('utf-8');
    let textByLine = data.split("\n");
    let input = textByLine.splice(0, 2)[0].split(",");
    let sheets = getSheetsFromData(textByLine);
    console.log("list s = ");
    return {
        input: input,
        sheets: sheets
    };
}
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
        let sheet = new Sheet();
        //loop throug the list 
        curSheet.forEach(l => {
            // and split each line on white space with RegEx expressiom
            //These become the horizontal lines
            sheet.addRow(new Row(l.split(/\s+/)));
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
        sheet.addRow(new Row(nRow), false);
    }
    return sheet;
}
//# sourceMappingURL=getData.js.map