import {Sheet,Row,Game,Result} from './Models';
import { checkSheet } from './logic';

export function partOne(data: Game): number {
	//Define best sheet
	let bestSheet: Result = { unmarktNumnerTotal: 0, finalInputNumber: 1000, sheetScore: 0 };

	data.sheets.forEach(s =>{
		let newRound = checkSheet(s, data.input);
		
		if(bestSheet.finalInputNumber > newRound.finalInputNumber){
			bestSheet = newRound
		}
	})


	return bestSheet.unmarktNumnerTotal * bestSheet.sheetScore;
}