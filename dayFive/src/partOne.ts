import {Line} from './models/Line';
import {Point} from './models/Point';
import { doesCollide } from './collide';
import {countCollitions} from './logic';

export function partOne(data: Line[]): number {
	let Dlines : Line[] = removeDiagonalLines(data)
	let counter = countCollitions(Dlines);
	
	return counter;
}
export function removeDiagonalLines(input: Line[]): Line[] {
	let lines: Line[] = [];

	input.forEach((line) => {
		if (line.start.y == line.end.y || line.start.x == line.end.x) {
			lines.push(line)
		}
	})
	return lines;
}
