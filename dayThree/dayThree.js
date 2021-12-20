"use strict";
exports.__esModule = true;
var fs = require("fs");
function getData(localFilePath) {
    var data = fs.readFileSync(localFilePath).toString('utf-8');
    var textByLine = data.split("\n");
    return textByLine;
}
function partOne(data) {
    var middleNumber = data.length / 2;
    var amountOfOnes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gamma = "";
    var epsilon = "";
    data.forEach(function (line) {
        var d = line.split("");
        for (var i = 0; i < d.length; i++) {
            if (d[i] == "1") {
                amountOfOnes[i] += 1;
            }
        }
    });
    amountOfOnes.forEach(function (n) {
        if (n > middleNumber) {
            gamma = gamma + "1";
            epsilon = epsilon + "0";
        }
        else {
            gamma = gamma + "0";
            epsilon = epsilon + "1";
        }
    });
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

function partTwo(data) {

    var pos = data[0].length;

    var numberList = [];
    data.forEach(function (line) {
        var l = line.split("");
        numberList.push(l);
    });

    for (var index = 0; index < pos; index++) {
        if (checkNumber(numberList, index)) {
            numberList = createNewList(numberList, true);
        }
        else {
            numberList = createNewList(numberList, false);
        }
    }

    return 0;
}

function checkNumber(data, counter) {

    var amountOfOnes = 0;
    var middleNumber = data.length / 2;
    data.forEach(function (i) {
        if (i[counter] == "1") {
            amountOfOnes += 1;
        }
    });
    return amountOfOnes >= middleNumber;
}
function createNewList(data, isOne) : string[]{

    let newList = [];
    if (isOne) {
        newList = data.filter(function (i) { return i[0] == "1"; });
    }
    else {
        newList = data.filter(function (i) { return i[0] == "0"; });
    }
    return newList;
}


var data = getData("data.txt");
console.log("Part one answer = " + partOne(data));
console.log("Part two answer = " + partTwo(data));
