import { checkSheet } from "../logic";
import { Sheet, Result, Game } from "../Models";
import { getData } from "../getData";

test("Part one check sheet 1", () => {
	const data = getData("dataTest.txt");

	const sheetToCheck: Sheet = data.sheets[0];
	const result: Result = {
		unmarktNumnerTotal: 137,
		finalInputNumber: 13,
		sheetScore: 16,
	}
	const actual = checkSheet(sheetToCheck, data.input);
	expect(actual).toStrictEqual(result);
})

test("Part one check sheet 3", () => {
	const data = getData("dataTest.txt");

	const sheetToCheck: Sheet = data.sheets[2];
	const result: Result = {
		unmarktNumnerTotal: 188,
		finalInputNumber: 11,
		sheetScore: 24
	}
	const actual = checkSheet(sheetToCheck, data.input);
	expect(actual).toStrictEqual(result);
})