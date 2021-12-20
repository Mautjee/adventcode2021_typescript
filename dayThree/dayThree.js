"use strict";
exports.__esModule = true;
var fs = require("fs");

////////////////////////////////////////////////////////////////
/*
    Getting the data from the file
*/
////////////////////////////////////////////////////////////////
function getData(localFilePath) {
    var data = fs.readFileSync(localFilePath).toString('utf-8');
    var textByLine = data.split("\n");
    return textByLine;
}
////////////////////////////////////////////////////////////////
/*
    Part one of day 3
*/
////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////
/*
    Part two of day 3
*/
////////////////////////////////////////////////////////////////
function partTwo(data) {

    var pos = data[0].length;
    var numberList = [];

    data.forEach(function (line) {
        var l = line.split("");
        numberList.push(l);
    });

    var lifeS = { oxygen: numberList, co2: numberList };

    for (var index = 0; index < pos; index++) {
        if (lifeS.oxygen.length != 1) {
            lifeS.oxygen = narrow(lifeS.oxygen, index, true);
        }
        if (lifeS.co2.length != 1) {
            lifeS.co2 = narrow(lifeS.co2, index, false);
        }
    }

    return parseInt(getFinalNumber(lifeS.co2), 2) * parseInt(getFinalNumber(lifeS.oxygen), 2);
}

// Getting the numbers from the list and creating a binary number
function getFinalNumber(list) {
    var number = "";
    list.forEach(function (line) {
        number = line.toString();
    });
    return number.replace(/,/g, '');
}
// narrow down the list with the right data
function narrow(data, index, bigger) {
    var list = data;
    if (bigger && checkNumber(list, index)) {
        list = createNewList(list, true, index);
    }
    else if (bigger && !checkNumber(list, index)) {
        list = createNewList(list, false, index);
    }
    else if (!bigger && checkNumber(list, index)) {
        list = createNewList(list, false, index);
    }
    else if (!bigger && !checkNumber(list, index)) {
        list = createNewList(list, true, index);
    }
    return list;
}
//Checking which number is present the most
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

// Creating a new list of the correct numbers
function createNewList(data, wantBigger, counter) {

    var newList = [];

    if (wantBigger) {
        newList = data.filter(function (i) { return i[counter] == "1"; });
    }
    else {
        newList = data.filter(function (i) { return i[counter] == "0"; });
    }

    return newList;
}

var data = getData("data.txt");

console.log("Part one answer = " + partOne(data));
console.log("Part two answer = " + partTwo(data));
