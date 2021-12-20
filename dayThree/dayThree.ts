import { Console } from 'console';
import * as fs from 'fs';




function partOne(localFilePath: string) : number {
	
	let data = fs.readFileSync(localFilePath).toString('utf-8'); 
	let textByLine = data.split("\n");

	let middleNumber = textByLine.length / 2;
	let amountOfOnes: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
	
	let gamma: string = "";
	let epsilon: string = "";

	textByLine.forEach(line =>{
		let d = line.split("");
		for (let i = 0; i < d.length; i++) {
			if (d[i] == "1"){
				amountOfOnes[i] += 1;
			}
		}
		
	})
	
	amountOfOnes.forEach(n =>{
		if (n > middleNumber){
			gamma = gamma + "1";
			epsilon = epsilon + "0"
		}else{
			gamma = gamma + "0";
			epsilon = epsilon + "1";
		}
	})


	return parseInt(gamma, 2) * parseInt(epsilon, 2);
}




console.log("Part one answer = " + partOne("data.txt"));