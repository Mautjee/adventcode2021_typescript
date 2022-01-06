import { Line, Point } from './models/models';
import { doesCollide } from './collide';

export function partOne(data: Line[]): number {

	const lineToCheck = removeDiagonalLines(data);
	const lineToCheck2 = data;

	let counter = 0;
	for (let i = 0; i < lineToCheck.length - 1; i++) {

		lineToCheck.forEach((line)=>{
			if(i != lineToCheck.indexOf(line)){
				let points: Point[] = [
					lineToCheck[i].start,
					lineToCheck[i].end,
					line.start,
					line.end
				];
				if(doesCollide(points)){
					counter += 1;
				};
			}
			
		})
		continue;		
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
