import { Line, Point } from './models/models';
import { direction, doesCollide } from './collide';

export function countCollitions(data: Line[]): number {

	let lineToCheck = data;;
	let lineToCheck2 = lineToCheck;

	let overlappingPoints: Point[]= [];
	let counter = 0;
	for (let i = 0; i < lineToCheck.length - 1; i++) {

		lineToCheck2.forEach((line)=>{
			//Prevent check of the same line
			if(i != lineToCheck.indexOf(line)){
				let points: Point[] = [
					lineToCheck[i].start,
					lineToCheck[i].end,
					line.start,
					line.end
				];
				if(doesCollide(points)){
					
					let l1 = lineToCheck[i].getLinePoints();
					let l2 = line.getLinePoints();
					l1.forEach((p1)=>{
						l2.some((p2)=>{
							if(p1.x == p2.x && p1.y == p2.y && !checkOverlapping(overlappingPoints,p1)){
								counter += 1;
								overlappingPoints.push(p1);
							}
						})
						
					})
				};
			}
			//lineToCheck.slice(lineToCheck.indexOf(line),1);
		})
		lineToCheck2  = lineToCheck2.slice(1)
		continue;		
	}

	return counter;
}
function checkOverlapping(oPoints:Point[],point:Point):boolean{
	let contains:boolean = false;
	oPoints.forEach((p)=>{
		if(p.x == point.x && p.y == point.y){
			contains = true;
		}
	})
	return contains;
}