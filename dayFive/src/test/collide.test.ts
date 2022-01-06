import {Point} from '../models/models';
import { doesCollide,direction} from '../collide';

test('Testing if two lines overlay on same Y axis', ()=> {

	const data: Point[] = [
		new Point(0,9), new Point(5,9),
		new Point(0,9), new Point(2,9),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(true);
})
test('Two lines collide on same Y axis', ()=> {

	const data: Point[] = [
		new Point(9,4), new Point(3,4),
		new Point(3,4), new Point(1,4),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(true);
})

test('Two lines collide on  X axis', ()=> {
	
	const data: Point[] = [
		new Point(7,5), new Point(7,1),
		new Point(3,4), new Point(9,4),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(true);
})
test('Two lines do not collide', ()=> {
	
	const data: Point[] = [
		new Point(5,3), 
		new Point(5,6),
		new Point(2,3), 
		new Point(2,6),
	];

	const actual:boolean = doesCollide(data);

	expect(actual).toBe(false);
})
test('Get direction of p3 in respect to p1p2 to be negative', ()=> {
	//const p1p2 : [Point,Point] = [new Point(1,1), new Point(1,2)]
	
	const point: Point[] = [
		new Point(2,7),
		new Point(4,5),
		new Point(3,6), 
		new Point(2,5),
	];

	let actual:boolean = false
	const directi :number = direction(point[0],point[1],point[3]);

	if ( Math.sign(directi) == -1){
		actual = true;
	}else{
		return false;
	}
	

	expect(actual).toBe(true);
})

test('Get direction of p4 in respect to p1p2 to be positive', ()=> {
	//const p1p2 : [Point,Point] = [new Point(1,1), new Point(1,2)]
	
	const point: Point[] = [
		new Point(2,7), 
		new Point(4,5),
		new Point(3,6), 
		new Point(2,5),
	];

	let actual:boolean = false
	const directi :number = direction(point[1],point[0],point[3]);

	if ( Math.sign(directi) == 1){
		actual = true;
	}else{
		return false;
	}
	

	expect(actual).toBe(true);
})
test('Get direction of p3 in respect to p1p2 to be colinear', ()=> {
	//const p1p2 : [Point,Point] = [new Point(1,1), new Point(1,2)]
	
	const point: Point[] = [
		new Point(2,7), 
		new Point(4,5),
		new Point(3,6), 
		new Point(2,5),
	];

	let actual:boolean = false
	const directi :number = direction(point[2],point[1],point[0]);

	if ( Math.sign(directi) == 0){
		actual = true;
	}else{
		return false;
	}
	

	expect(actual).toBe(true);
})