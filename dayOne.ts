import * as fs from 'fs';

function readFile(localFilePath: string) : number[] {
	
	let data = fs.readFileSync(localFilePath).toString('utf-8'); 
	let textByLine = data.split("\n");
	let numByLine : number[] =[];
	textByLine.forEach(element => {
		numByLine.push(parseInt(element));
	});

	return numByLine;
}

function partOne(data:number[]):number {
	let counter : number = 0;
	let previos : number = data[0];

	let isFirst:boolean = true;
	
	data.forEach(i =>{
		if (!isFirst){
			if (i > previos){
				counter = counter + 1;
				previos = i;
			}else{
				previos = i;
			}
		}else{
			isFirst = false;
		}
	})
	return counter;
}
function partTwo(data:number[]):number{
	let counter : number = 0;
	let window : number = 0;
	let prevWindow: number = 0;
	for (let i = 0; i < data.length -2; i++) {
		window = data[i] + data[i+1] + data[i+2];
		if (prevWindow != 0) {
			if (window > prevWindow){
				counter = counter + 1;
			}
		}
		prevWindow = window;
	}
	return counter;
}
let listOfNumbers = readFile('data.txt');

console.log("Part one answer = " + partOne(listOfNumbers));
console.log("Part two answer = " + partTwo(listOfNumbers));