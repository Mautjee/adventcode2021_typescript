import {Line} from './models/models'

export function drawLines(lines:Line[]):number{
	
	let grid: number[][] = []

	lines.forEach((line) =>{
		if(line.start.y == line.end.y){
			for(let i = 0; i !=(line.start.x - line.end.x); i++){}
			//grid.push(line.x, line.y)
		}
		
	})

	
	return 0;
}