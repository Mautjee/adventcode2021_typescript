import {Result,Game} from './Models';
import { checkSheet } from './logic';


export function partTwo(data: Game): number { 

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