import { partOne, getData, checkSheet } from "./main";
test("Part one full test", () => {
    const data = getData("dataTest.txt");
    console.log(data.sheets[0].horizontal[0].listNumber);
    const actual = partOne(data);
    expect(actual).toBe(4512);
});
test("Part one check sheet 1", () => {
    const data = getData("dataTest.txt");
    const sheetToCheck = data.sheets[0];
    const result = {
        unmarktNumnerTotal: 137,
        finalInputNumber: 13,
        sheetScore: 16,
    };
    const actual = checkSheet(sheetToCheck, data.input);
    console.log(actual);
    expect(actual).toBe(result);
});
test("Part one check sheet 3", () => {
    const data = getData("dataTest.txt");
    const sheetToCheck = data.sheets[2];
    const result = {
        unmarktNumnerTotal: 188,
        finalInputNumber: 11,
        sheetScore: 24
    };
    const actual = checkSheet(sheetToCheck, data.input);
    expect(actual).toBe(result);
});
//# sourceMappingURL=partOne.test.js.map