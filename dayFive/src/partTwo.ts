import { Line, Point } from './models/models';
import { doesCollide } from './collide';
import {countCollitions} from './logic';

export function partTwo(data: Line[]): number {
	
	let counter = countCollitions(data);
	
	return counter;
}