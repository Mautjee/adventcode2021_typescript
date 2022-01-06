import {Point,Line} from '../models/models';
import {partOne, removeDiagonalLines} from '../partOne';
import {getData} from '../getData';

test('Part one romove diagonal lines', ()=>{
	const expected: Line[] = [
		new Line(new Point(0,9), new Point(5,9)),
		new Line(new Point(9,4), new Point(3,4)),
		new Line(new Point(2,2), new Point(2,1)),
		new Line(new Point(7,0), new Point(7,4)),
		new Line(new Point(0,9), new Point(2,9)),
		new Line(new Point(3,4), new Point(1,4)),
	];
	const data = getData("dataTest.txt");

	const actual: Line[] = removeDiagonalLines(data);

	expect(actual).toStrictEqual(expected);
})

test('Part one amount of collitions', ()=>{

	const expected: number = 5;

	const data = getData("dataTest.txt");

	const actual:number = partOne(data);

	expect(actual).toBe(expected)
})