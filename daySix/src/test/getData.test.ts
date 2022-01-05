
import { getData } from '../getData';
import { BreedTimer } from '../model';

test("Get data test", () => {

  const expected: BreedTimer[] = [
    new BreedTimer(0, 0),
    new BreedTimer(1, 175),
    new BreedTimer(2, 34),
    new BreedTimer(3, 25),
    new BreedTimer(4, 36),
    new BreedTimer(5, 30),
    new BreedTimer(6, 0),
    new BreedTimer(7, 0),
    new BreedTimer(8, 0),
  ];

  const actual = getData("data.txt");
  expect(actual).toStrictEqual(expected);
});
