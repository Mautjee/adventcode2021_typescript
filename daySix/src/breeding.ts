import { BreedTimer } from "./model";

export function breeding(input: BreedTimer[], amoutOfDays: number): number {
	const maxDays: number = amoutOfDays;

	const initState: BreedTimer[] = input;

	let currentState: BreedTimer[] = [];

	for (let i = 0; i <= maxDays; i++) {
		if (i == 0) {
			currentState = initState
			continue;
		}
		currentState = newDay(currentState);
	}
	return calculateTotalFish(currentState);
}

function newDay(state: BreedTimer[]): BreedTimer[] {
	let tmp: number = 0;
	let updatedState = state;
	for (let i = state.length - 1; i >= 0; i--) {
		let index: number = state[i].timer;

		if (state[i].timer == 0) {
			updatedState[8].addPopulation(state[i].population);
			updatedState[6].addPopulation(state[i].updatePopulation(tmp));
		} else {
			//updatedState[i].addPopulation(tmp)
			tmp = updatedState[index].updatePopulation(tmp)

		}
	}

	return updatedState;
}

function calculateTotalFish(state: BreedTimer[]): number {
	let counter = 0;
	state.forEach((x) => {
		counter += x.population;
	})
	return counter;

}