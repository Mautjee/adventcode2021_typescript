import { partOne } from "../partOne";
import { getData } from "../getData";


test("Part one full test", () => {

  const data = getData("dataTest.txt");

  const actual = partOne(data);
  expect(actual).toBe(4512);
});
