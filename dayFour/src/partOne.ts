import {Game, Sheet, Row} from './Models'


export function partOne(data:Game):number{
	let BestSheet: Sheet = new Sheet();
	let lowestNumber: number = 0;	
	
	// Loop though all the avalible sheets
	for(let i = 0; i < data.sheets.length; i++){
		//
		checkSheet(data.sheets[i], data.input);
	}

	
	return 990000;
}

function checkSheet(sheet:Sheet,input:string[]):[Sheet,number]{
	const numberToCheck: Row[] = sheet.horizontal.concat(sheet.vertical);

	numberToCheck.forEach(row =>{
		let find = row.listNumber.find(elem => elem == input[1]);
		let findq = null;
	})
	
	return [,0];
}

export function sum (a:number,b:number):number{
	return a+b;
}