import * as fs from 'fs';

interface direction{
	d: string,
	n: number
}

function readFile(localFilePath: string) : direction[] {
	
	let data = fs.readFileSync(localFilePath).toString('utf-8'); 
	let textByLine = data.split("\n");
	let listDirection : direction[] = [];
	textByLine.forEach(line =>{
		let splitData = line.split(" ");
		listDirection.push({d:splitData[0],n:parseInt(splitData[1])});
	})

	return listDirection;
}

function partOne(data: direction[]): number{
	let horizontal:number = 0;
	let vertical:number = 0;

	data.forEach(i =>{
		switch(i.d){
			case "forward":
				horizontal += i.n;
				break;
			case "up": 
				vertical -= i.n;
				break;
			case "down":
				vertical += i.n;
		}
	})
	return horizontal * vertical;
}

function partTwo(data: direction[]): number{
	let horizontal:number = 0;
	let vertical:number = 0;
	let aim:number = 0;

	data.forEach(i =>{
		switch(i.d){
			case "forward":
				horizontal += i.n;
				if (aim != 0) {
					vertical += i.n * aim;
				}
				break;
			case "up": 
				aim -= i.n;
				break;
			case "down":
				aim += i.n;
		}
	})
	return horizontal * vertical;
}

let data = readFile("data.txt");

console.log("Part one answer = " + partOne(data));
console.log("Part two answer = " + partTwo(data));