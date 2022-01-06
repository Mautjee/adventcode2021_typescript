import {Line} from './models/Line';
import {Point} from './models/Point';
import * as fs from 'fs';

export function getData(localFilePath: string): Line[] {

	let data = fs.readFileSync(localFilePath).toString('utf-8');

	return createListOfLines(data.split("\n"));

}

function createListOfLines(data: string[]): Line[] {
	let lines: Line[] = [];
	data.forEach((n) => {
		let [start, end] = n.split(" -> ").map(function (entry) {
			let point = entry.split(",")
			return new Point(parseInt(point[0]), parseInt(point[1]))
		})
		lines.push(new Line(start, end));

	})
	return lines;
}
