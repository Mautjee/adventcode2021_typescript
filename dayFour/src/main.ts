////////////////////////////////////////////////////////////////
/*
    Models
*/
////////////////////////////////////////////////////////////////

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

interface Game {
	input: string[],
	sheets: Sheet[]
}

////////////////////////////////////////////////////////////////
/*
    Get data
*/
////////////////////////////////////////////////////////////////


import * as fs from 'fs';


export function getData(localFilePath: string): Game {
	let data = fs.readFileSync(localFilePath).toString('utf-8');

	let textByLine = data.split("\n");

	let input: string[] = textByLine.splice(0, 2)[0].split(",");

	let sheets: Sheet[] = getSheetsFromData(textByLine);

	return {
		input: input,
		sheets: sheets
	};
}


function getSheetsFromData(rawData: string[]): Sheet[] {

	//fiter out the white spaces using regex
	let sheetsData = rawData.filter(function (str) { return /\S/.test(str) });

	//length is the lengt of the total of sheets
	let length = rawData.filter(i => i == '').length;

	let sheetList: Sheet[] = [];

	// Loops throug list of raw data sheets
	for (let i = 0; i < length; i++) {

		//data sheet is list of strings whit the Bingo sheet data
		let curSheet: string[] = sheetsData.splice(0, 5);

		//create new single sheet
		let sheet: Sheet = new Sheet();

		//loop throug the list 
		curSheet.forEach(l => {
			// and split each line on white space with RegEx expressiom
			//These become the horizontal lines
			sheet.addRow(new Row(l.split(/\s+/)));
		})
		//this function extracts the verticle lines from the horizontal lines
		sheetList.push(getVerticleNumbers(sheet));
	}

	return sheetList;
}
function getVerticleNumbers(sheet: Sheet): Sheet {


	// loop throug the list of horizontal lines
	for (let i = 0; i < 5; i++) {

		// nRow is temprary storage for new verticle line
		let nRow = [];

		sheet.horizontal.forEach(l => {
			nRow.push(l.listNumber[i])
		})
		sheet.addRow(new Row(nRow), false);
	}
	return sheet

}


////////////////////////////////////////////////////////////////
/*
   day 4 part one
*/
////////////////////////////////////////////////////////////////

export interface Result {
	unmarktNumnerTotal: number,
	finalInputNumber: number,
	sheetScore: number
}

export function partOne(data: Game): number {
	//Define best sheet
	let bestSheet: Result = { unmarktNumnerTotal: 0, finalInputNumber: 1000, sheetScore: 0 };

	data.sheets.forEach(s =>{
		let newRound = checkSheet(s, data.input);
		
		if(bestSheet.finalInputNumber > newRound.finalInputNumber){
			bestSheet = newRound
		}
	})
	// // Loop though all the avalible sheets
	// for (let sheetNumber = 0; sheetNumber < data.sheets.length; sheetNumber++) {

	// 	//Check sheet againts the input numbers
	// 	let newRound = checkSheet(data.sheets[sheetNumber], data.input);

	// 	//compair old sheet with new sheet
	// 	if (newRound.finalInputNumber < bestSheet.finalInputNumber) {

	// 		bestSheet = newRound;
	// 	};

	// }


	return bestSheet.unmarktNumnerTotal * bestSheet.sheetScore;
}

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

	console.log(finalInputNumber)
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

////////////////////////////////////////////////////////////////
/*
   day 4 part two
*/
////////////////////////////////////////////////////////////////

function partTwo(data: Game): number { 

	//Define worst sheet
	let worstSheet: Result = { unmarktNumnerTotal: 0, finalInputNumber: 0, sheetScore: 0 };

	data.sheets.forEach(s =>{
		let newRound = checkSheet(s, data.input);
		
		if(worstSheet.finalInputNumber <= newRound.finalInputNumber){
			worstSheet = newRound
		}
	})

	// // Loop though all the avalible sheets
	// for (let sheetNumber = 0; sheetNumber < data.sheets.length; sheetNumber++) {

	// 	//Check sheet againts the input numbers
	// 	let newRound = checkSheet(data.sheets[sheetNumber], data.input);

	// 	//compair old sheet with new sheet
	// 	if (newRound.finalInputNumber > bestSheet.finalInputNumber) {

	// 		bestSheet = newRound;
	// 	};

	// }

	return worstSheet.unmarktNumnerTotal * worstSheet.sheetScore;
}


console.log("answer part 1 = " + partOne(getData("data.txt")));
console.log("answer part 2 = " + partTwo(getData("data.txt")));