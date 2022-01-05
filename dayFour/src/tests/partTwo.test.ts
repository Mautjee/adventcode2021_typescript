import { partTwo } from "../partTwo";
import { getData } from "../getData";


test("Part two full test", () => {

  const data = getData("dataTest.txt");

  const actual = partTwo(data);
  expect(actual).toBe(1924);
});
