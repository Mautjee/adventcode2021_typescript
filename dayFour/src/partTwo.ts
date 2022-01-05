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

	return worstSheet.unmarktNumnerTotal * worstSheet.sheetScore;
}