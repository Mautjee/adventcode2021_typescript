import { Line, Point } from './models';
import { doesCollide } from './collide';

export function partOne(data: Line[]): number {

	const lineToCheck = removeDiagonalLines(data);
	let counter = 0;
	for (let i = 0; i < lineToCheck.length - 1; i++) {
		let points: Point[] = [
			lineToCheck[i].start,
			lineToCheck[i].end,
			lineToCheck[i + 1].start,
			lineToCheck[i + 1].end
		];
		if(doesCollide(points)){
			counter += 1;
			continue;
		};
	}

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
