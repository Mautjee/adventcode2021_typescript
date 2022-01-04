"use strict";
////////////////////////////////////////////////////////////////
/*
    Models
*/
////////////////////////////////////////////////////////////////
exports.__esModule = true;
exports.checkSheet = exports.partOne = exports.getData = exports.Sheet = exports.Row = void 0;
var Row = /** @class */ (function () {
    function Row(number) {
        this.listNumber = number;
        this.counter = 0;
    }
    return Row;
}());
exports.Row = Row;
var Sheet = /** @class */ (function () {
    function Sheet() {
        this.horizontal = [];
        this.vertical = [];
    }
    Sheet.prototype.addRow = function (nRow, isHorizontal) {
        if (isHorizontal === void 0) { isHorizontal = true; }
        if (isHorizontal) {
            this.horizontal.push(nRow);
        }
        else {
            this.vertical.push(nRow);
        }
    };
    Sheet.prototype.getSheetNumbers = function () {
        var list = [];
        var _loop_1 = function (i) {
            this_1.horizontal.forEach(function (l) {
                list.push(l.listNumber[i]);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.horizontal.length; i++) {
            _loop_1(i);
        }
        return list;
    };
    return Sheet;
}());
exports.Sheet = Sheet;
////////////////////////////////////////////////////////////////
/*
    Models
*/
////////////////////////////////////////////////////////////////
var fs = require("fs");
function getData(localFilePath) {
    var data = fs.readFileSync(localFilePath).toString('utf-8');
    var textByLine = data.split("\n");
    var input = textByLine.splice(0, 2)[0].split(",");
    var sheets = getSheetsFromData(textByLine);
    console.log("list s = ");
    return {
        input: input,
        sheets: sheets
    };
}
exports.getData = getData;
function getSheetsFromData(rawData) {
    //fiter out the white spaces using regex
    var sheetsData = rawData.filter(function (str) { return /\S/.test(str); });
    //length is the lengt of the total of sheets
    var length = rawData.filter(function (i) { return i == ''; }).length;
    var sheetList = [];
    var _loop_2 = function (i) {
        //data sheet is list of strings whit the Bingo sheet data
        var curSheet = sheetsData.splice(0, 5);
        //create new single sheet
        var sheet = new Sheet();
        //loop throug the list 
        curSheet.forEach(function (l) {
            // and split each line on white space with RegEx expressiom
            //These become the horizontal lines
            sheet.addRow(new Row(l.split(/\s+/)));
        });
        //this function extracts the verticle lines from the horizontal lines
        sheetList.push(getVerticleNumbers(sheet));
    };
    // Loops throug list of raw data sheets
    for (var i = 0; i < length; i++) {
        _loop_2(i);
    }
    return sheetList;
}
function getVerticleNumbers(sheet) {
    var _loop_3 = function (i) {
        // nRow is temprary storage for new verticle line
        var nRow = [];
        sheet.horizontal.forEach(function (l) {
            nRow.push(l.listNumber[i]);
        });
        sheet.addRow(new Row(nRow), false);
    };
    // loop throug the list of horizontal lines
    for (var i = 0; i < 5; i++) {
        _loop_3(i);
    }
    return sheet;
}
function partOne(data) {
    //Define best sheet
    var bestSheet = { unmarktNumnerTotal: 0, finalInputNumber: 1000, sheetScore: 0 };
    // Loop though all the avalible sheets
    for (var sheetNumber = 0; sheetNumber < data.sheets.length; sheetNumber++) {
        //Check sheet againts the input numbers
        var newRound = checkSheet(data.sheets[sheetNumber], data.input);
        //compair old sheet with new sheet
        if (newRound.finalInputNumber < bestSheet.finalInputNumber) {
            bestSheet = newRound;
        }
        ;
    }
    return bestSheet.unmarktNumnerTotal * bestSheet.sheetScore;
}
exports.partOne = partOne;
function checkSheet(sheet, input) {
    var numberToCheck = sheet.horizontal.concat(sheet.vertical);
    var winningNumber = "";
    var finalInputNumber = 0;
    var sheetNumbers = sheet.getSheetNumbers();
    var won = false;
    var _loop_4 = function (inputNumber) {
        var inp = input[inputNumber];
        numberToCheck.forEach(function (row) {
            //const index = row.listNumber.findIndex((item) => item == inp);
            if (row.counter != 5) {
                if (row.listNumber.includes(inp)) {
                    row.counter++;
                    if (row.counter == 5) {
                        winningNumber = input[inputNumber];
                        finalInputNumber = inputNumber;
                        won = true;
                    }
                }
            }
            else {
                winningNumber = input[inputNumber];
                finalInputNumber = inputNumber;
                won = true;
                return false;
            }
        });
        if (sheetNumbers.includes(inp)) {
            sheetNumbers.splice(sheetNumbers.indexOf(inp), 1);
        }
        if (won) {
            return "break";
        }
    };
    //loop throug the input and check the numbers
    for (var inputNumber = 0; inputNumber < input.length; inputNumber++) {
        var state_1 = _loop_4(inputNumber);
        if (state_1 === "break")
            break;
    }
    return {
        unmarktNumnerTotal: calculateUnmarkedSheet(sheetNumbers),
        finalInputNumber: finalInputNumber,
        sheetScore: parseInt(winningNumber)
    };
}
exports.checkSheet = checkSheet;
function calculateUnmarkedSheet(sheetNumbers) {
    var count = 0;
    sheetNumbers.forEach(function (item) {
        count = count + parseInt(item);
    });
    return count;
}
var data = getData("data.txt");
console.log("answer part 1 = " + partOne(data));
