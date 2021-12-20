"use strict";
exports.__esModule = true;
var fs = require("fs");
function readFile(localFilePath) {
    var data = fs.readFileSync(localFilePath).toString('utf-8');
    var textByLine = data.split("\n");
    var numByLine = [];
    textByLine.forEach(function (element) {
        numByLine.push(parseInt(element));
    });
    return numByLine;
}
function partOne(data) {
    var counter = 0;
    var previos = data[0];
    var isFirst = true;
    data.forEach(function (i) {
        if (!isFirst) {
            if (i > previos) {
                counter = counter + 1;
                previos = i;
            }
            else {
                previos = i;
            }
        }
        else {
            isFirst = false;
        }
    });
    return counter;
}
function partTwo(data) {
    var counter = 0;
    var window = 0;
    var prevWindow = 0;
    for (var i = 0; i < data.length - 2; i++) {
        window = data[i] + data[i + 1] + data[i + 2];
        if (prevWindow != 0) {
            if (window > prevWindow) {
                counter = counter + 1;
            }
        }
        prevWindow = window;
    }
    return counter;
}
var listOfNumbers = readFile('data.txt');
console.log("Part one answer = " + partOne(listOfNumbers));
console.log("Part two answer = " + partTwo(listOfNumbers));
