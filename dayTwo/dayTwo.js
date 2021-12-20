"use strict";
exports.__esModule = true;
var fs = require("fs");
function readFile(localFilePath) {
    var data = fs.readFileSync(localFilePath).toString('utf-8');
    var textByLine = data.split("\n");
    var listDirection = [];
    textByLine.forEach(function (line) {
        var splitData = line.split(" ");
        listDirection.push({ d: splitData[0], n: parseInt(splitData[1]) });
    });
    return listDirection;
}
function partOne(data) {
    var horizontal = 0;
    var vertical = 0;
    data.forEach(function (i) {
        switch (i.d) {
            case "forward":
                horizontal += i.n;
                break;
            case "up":
                vertical -= i.n;
                break;
            case "down":
                vertical += i.n;
        }
    });
    return horizontal * vertical;
}
function partTwo(data) {
    var horizontal = 0;
    var vertical = 0;
    var aim = 0;
    data.forEach(function (i) {
        switch (i.d) {
            case "forward":
                horizontal += i.n;
                if (aim != 0) {
                    vertical += i.n * aim;
                }
                break;
            case "up":
                aim -= i.n;
                break;
            case "down":
                aim += i.n;
        }
    });
    return horizontal * vertical;
}
var data = readFile("data.txt");
console.log("Part one answer = " + partOne(data));
console.log("Part two answer = " + partTwo(data));
