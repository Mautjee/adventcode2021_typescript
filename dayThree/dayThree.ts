import { Console } from 'console';
import * as fs from 'fs';

////////////////////////////////////////////////////////////////
/*
    Getting the data from the file
*/
////////////////////////////////////////////////////////////////

function getData(localFilePath: string): string[]{
	let data = fs.readFileSync(localFilePath).toString('utf-8'); 
	let textByLine = data.split("\n");
	return textByLine;
}
////////////////////////////////////////////////////////////////
/*
    Part one of day 3
*/
////////////////////////////////////////////////////////////////

function partOne(data : string[]) : number {
	

	let middleNumber = data.length / 2;
	let amountOfOnes: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
	
	let gamma: string = "";
	let epsilon: string = "";

	data.forEach(line =>{
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

interface lifeSupport{
	oxygen: string[][],
	co2:string[][],
}
////////////////////////////////////////////////////////////////
/*
    Part two of day 3
*/
////////////////////////////////////////////////////////////////
function partTwo(data:string[]):number {

	let pos:number = data[0].length;

	let numberList : string[][] = [];
	
	
	data.forEach(line => {
		let l = line.split("");
		numberList.push(l)
	})


	let lifeS :lifeSupport = {oxygen:numberList,co2:numberList};

	for (let index = 0; index < pos; index++) {
		if (lifeS.oxygen.length != 1){
			lifeS.oxygen = narrow(lifeS.oxygen, index, true);
		}
		if(lifeS.co2.length != 1){
			lifeS.co2 = narrow(lifeS.co2, index,false);
		}
	}
	

	return parseInt(getFinalNumber(lifeS.co2), 2) * parseInt(getFinalNumber(lifeS.oxygen), 2);
}
// Getting the numbers from the list and creating a binary number
function getFinalNumber(list: string[][]):string{
	let number : string = ""
	list.forEach(line =>{
		number = line.toString();
	})

	return number.replace(/,/g,'') ;
}

// narrow down the list with the right data
function narrow(data:string[][], index:number, bigger:boolean): string[][]{
	let list:string[][] = data; 
	if (bigger && checkNumber(list,index)){
			
		list = createNewList(list, true,index);
		
	} else if (bigger && !checkNumber(list,index)){

		list = createNewList(list, false,index);

	} else if (!bigger && checkNumber(list,index)){

		list = createNewList(list,false,index);

	} else if (!bigger && !checkNumber(list,index)){

		list = createNewList(list,true,index);
	}
	return list;	
}
//Checking which number is present the most
function checkNumber(data:string[][],counter:number):boolean {
	let amountOfOnes : number = 0;
	let middleNumber : number = data.length /2;
	data.forEach(i => {
		if (i[counter] == "1"){
			amountOfOnes += 1;
			
		}	
	})
	return amountOfOnes >= middleNumber
}

// Creating a new list of the correct numbers
function createNewList(data:string[][],wantBigger:boolean, counter:number) : string[][]{
	let newList : string[][] = [];
	
	if (wantBigger){
		newList = data.filter(i => i[counter] == "1");		
	}else{
		newList = data.filter(i => i[counter] == "0");
	}
	
	return newList;
}

let data = getData("data.txt");

console.log("Part one answer = " + partOne(data));
console.log("Part two answer = " + partTwo(data));