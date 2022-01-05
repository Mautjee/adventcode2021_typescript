import { breeding } from "../breeding";
import { getData } from "../getData";

test("partOne with test data and 18 days", () => {
	let data = getData("dataTest.txt");
	let actual = breeding(data,18);

	expect(actual).toBe(26);
})

test("partOne with test data and 80 days", () => {
	let data = getData("dataTest.txt");
	let actual = breeding(data,80);

	expect(actual).toStrictEqual(5934);
})
test("partOne with test data and 256 days", () => {
	let data = getData("dataTest.txt");
	let actual = breeding(data,256);

	expect(actual).toStrictEqual(26984457539);
})
