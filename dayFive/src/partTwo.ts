import {Line} from './models/Line';
import {countCollitions} from './logic';

export function partTwo(data: Line[]): number {

	let counter = countCollitions(data);
	
	return counter;
}