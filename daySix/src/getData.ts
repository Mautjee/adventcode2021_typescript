import { count } from 'console';
import * as fs from 'fs';
import { BreedTimer } from './model';

export function getData(localFilePath: string): BreedTimer[] {

	let data = fs.readFileSync(localFilePath).toString('utf-8');

	return createFirstGeneration(data.split(","));
}

function createFirstGeneration(input: string[]): BreedTimer[] {
	const counts: BreedTimer[] = [
		new BreedTimer(0, 0),
		new BreedTimer(1, 0),
		new BreedTimer(2, 0),
		new BreedTimer(3, 0),
		new BreedTimer(4, 0),
		new BreedTimer(5, 0),
		new BreedTimer(6, 0),
		new BreedTimer(7, 0),
		new BreedTimer(8, 0),
	];

	input.forEach((x) => {
		counts[parseInt(x)].addPopulation(1);
	});
	//const decendingsortedList = counts.sort((first, second) => 0 - (first.timer > second.timer ? 1 : -1));
	return counts;

}