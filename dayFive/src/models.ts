export class Point{
	public x:number;
	public y:number;

	constructor(x:number, y:number){
		this.x = x;
		this.y = y;
	}
}

export class Line{
	public start: Point;
	public end: Point;

	constructor(start: Point, end: Point){
		this.start = start;
		this.end = end;
	}
}