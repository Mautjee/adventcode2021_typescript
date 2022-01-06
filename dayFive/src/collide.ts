import {Point} from './models';

export function doesCollide(points: Point[]): boolean {
	let d1 = direction(points[2], points[3], points[0])
	let d2 = direction(points[2], points[3], points[1])
	let d3 = direction(points[0], points[1], points[2])
	let d4 = direction(points[0], points[1], points[3])

	if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
		return true;
	} else if (d1 == 0 && onSegment(points[2], points[3], points[0])) {
		return true;
	} else if (d2 == 0 && onSegment(points[2], points[3], points[1])) {
		return true;
	} else if (d3 == 0 && onSegment(points[0], points[1], points[2])) {
		return true;
	} else if (d4 == 0 && onSegment(points[0], points[1], points[3])) {
		return true;
	} else {
		return false;
	}
}
function onSegment(P1: Point, P2: Point, P3: Point): boolean {

	if (Math.min(P1.x, P2.x) <= P3.x && P3.x <= Math.max(P1.x, P2.x) && Math.min(P1.y, P2.y) <= P3.y && P3.y <= Math.max(P1.y, P2.y)) {
		return true;
	} else {
		return false;
	}
}
function direction(P1: Point, P2: Point, P3: Point): number {
	let np1 = new Point((P1.x - P3.x), (P1.y - P2.y));
	let mp2 = new Point((P2.x - P1.x),(P2.y - P1.y));
	
	return np1.x * mp2.y - mp2.x * np1.y
}

function direction2(P1: Point, P2: Point, P3: Point): number {
	return ((P1.x - P3.x) - (P1.y - P2.y)) * ((P2.x - P1.x) - (P2.y - P1.y));
}