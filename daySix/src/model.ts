export class BreedTimer {
	public timer: number;
	public population: number;

	constructor(timer: number, population: number) {
		this.timer = timer;
		this.population = population;
	}

	addPopulation(amount: number) {
		this.population += amount;
	}
	updatePopulation(newPopulation: number): number {
		let pop = this.population;
		this.population = newPopulation;
		return pop;
	}
}