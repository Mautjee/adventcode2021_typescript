import {Point} from '../models';
import { doesCollide } from '../collide';

test('Testing if two lines overlay on same Y axis', ()=> {

	const data: Point[] = [
		new Point(0,9), new Point(5,9),
		new Point(0,9), new Point(2,9),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(true);
})
test('Testing if two lines collide on same Y axis', ()=> {

	const data: Point[] = [
		new Point(9,4), new Point(3,4),
		new Point(3,4), new Point(1,4),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(true);
})

test('Testing if two lines collide on  X axis', ()=> {
	
	const data: Point[] = [
		new Point(7,5), new Point(7,1),
		new Point(3,4), new Point(9,4),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(true);
})