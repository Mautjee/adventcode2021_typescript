export class Row {
	public listNumber: string[];
	public counter: number;

	constructor(number: string[]) {
		this.listNumber = number;
		this.counter = 0;
	}
}
export class Sheet {
	public vertical: Row[];
	public horizontal: Row[];

	constructor() {
		this.horizontal = [];
		this.vertical = [];
	}

	addRow(nRow: Row, isHorizontal: boolean = true) {
		if (isHorizontal) {
			this.horizontal.push(nRow);
		} else {
			this.vertical.push(nRow);
		}
	}

	getSheetNumbers(): string[] {
		let list: string[] = [];

		for (let i = 0; i < this.horizontal.length; i++)
			this.horizontal.forEach(l => {
				list.push(l.listNumber[i]);
			})

		return list;
	}
}

export interface Game {
	input: string[],
	sheets: Sheet[]
}

export interface Result {
	unmarktNumnerTotal: number,
	finalInputNumber: number,
	sheetScore: number
}