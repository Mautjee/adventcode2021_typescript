import {Line} from '../models/Line';
import {Point} from '../models/Point';
import {countCollitions} from '../logic';
import {getData} from '../getData';
import {removeDiagonalLines} from '../partOne';


test('Part one amount of collitions', ()=>{

	const expected: number = 5;

	const data = removeDiagonalLines(getData("dataTest.txt"));
	
	const actual:number = countCollitions(data);

	expect(actual).toBe(expected)
})
test('Part one amount of collitions', ()=>{

	const expected: number = 12;

	const data = getData("dataTest.txt");

	const actual:number = countCollitions(data);

	expect(actual).toBe(expected)
})
test('Check lines and get number of colition points', ()=>{
	const input: Line[] = [
		new Line(new Point(2,5), new Point(7,5)),
		new Line(new Point(4,2), new Point(4,7)),
		new Line(new Point(4,6), new Point(4,4))
	];
	
	const actual:number = countCollitions(input);

	expect(actual).toBe(3)
})

test('Check duplicates on same line', ()=>{
	const input: Line[] = [
		new Line(new Point(3,6), new Point(3,9)),
		new Line(new Point(3,6), new Point(3,7)),
	];
	
	const actual:number = countCollitions(input);

	expect(actual).toBe(2)
})

