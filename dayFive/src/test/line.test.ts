import {Line, Point} from '../models/models'

test('get full line points on x-axis',() => {
	const expected:Point[] = [
		new Point(3, 6),
		new Point(3, 7),
		new Point(3, 8),
		new Point(3, 9),
	]
	const data = new Line(new Point(3, 6),new Point(3, 9))
	const actual = data.getLinePoints();

	expect(actual).toStrictEqual(expected)
})


test('get full line points on y-axis',() => {
	const expected:Point[] = [
		new Point(6, 3),
		new Point(7, 3),
		new Point(8, 3),
		new Point(9, 3),
	]
	const data = new Line(new Point(6, 3),new Point(9, 3))
	const actual = data.getLinePoints();

	expect(actual).toStrictEqual(expected)
})

test('get full line points on Diagnol-axis to the right',() => {
	const expected:Point[] = [
		new Point(5,2),
		new Point(6,3),
		new Point(7,4),
		new Point(8,5),
	]
	const data = new Line(new Point(5, 2),new Point(8, 5))
	const actual = data.getLinePoints();

	expect(actual).toStrictEqual(expected)
})

test('get full line points on Diagnol-axis to the left',() => {
	const expected:Point[] = [
		new Point(5,4),
		new Point(4,5),
		new Point(3,6),
		new Point(2,7),
	]
	const data = new Line(new Point(5, 4),new Point(2, 7))
	const actual = data.getLinePoints();

	expect(actual).toStrictEqual(expected)
})

test('check overlapping points propperty',() => {
	const point:Point = new Point(6, 3);
	const expected:boolean = true;

	const line = new Line(new Point(6, 3),new Point(9, 3));

	line.pushNewOverlap(point);
	const actual = line.containsOverlappingPoint(point);

	expect(actual).toStrictEqual(expected)
})
