"use strict";
exports.__esModule = true;
var fs = require("fs");
function partOne(localFilePath) {
    var data = fs.readFileSync(localFilePath).toString('utf-8');
    var textByLine = data.split("\n");
    var middleNumber = textByLine.length / 2;
    var amountOfOnes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gamma = "";
    var epsilon = "";
    textByLine.forEach(function (line) {
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
console.log("Part one answer = " + partOne("data.txt"));
