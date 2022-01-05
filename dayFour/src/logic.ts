import {Sheet,Row,Game,Result} from './Models'

export function checkSheet(sheet: Sheet, input: string[]): Result {
	const numberToCheck: Row[] = sheet.horizontal.concat(sheet.vertical);

	let winningNumber: string = "";
	let finalInputNumber: number = 0;

	let sheetNumbers: string[] = sheet.getSheetNumbers();
	let won: boolean = false;

	//loop throug the input and check the numbers
	for (let inputNumber = 0; inputNumber < input.length; inputNumber++) {

		let inp = input[inputNumber];
		numberToCheck.forEach(row => {
			//const index = row.listNumber.findIndex((item) => item == inp);

			if (row.counter != 5) {
				if (row.listNumber.includes(inp)) {
					row.counter++;
					if(row.counter == 5){
						winningNumber = input[inputNumber];
						finalInputNumber = inputNumber;
						won=true;
					}
				}

			} else {
				winningNumber = input[inputNumber];
				finalInputNumber = inputNumber;
				won = true
				return false;

			}

		})
		if (sheetNumbers.includes(inp)) {
			sheetNumbers.splice(sheetNumbers.indexOf(inp), 1);
		}
		if (won) {
			break;
		}
	}

	return {
		unmarktNumnerTotal: calculateUnmarkedSheet(sheetNumbers),
		finalInputNumber: finalInputNumber,
		sheetScore: parseInt(winningNumber)
	}
}

function calculateUnmarkedSheet(sheetNumbers: string[],): number {

	let count: number = 0;

	sheetNumbers.forEach(item => {
		if(item != ''){
			count = count + parseInt(item);
		}
	})
	return count;
}
