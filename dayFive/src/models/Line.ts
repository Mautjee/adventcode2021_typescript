import {Point} from './Point';

export class Line {
	public start: Point;
	public end: Point;
	private _overlapping: Point[];

	constructor(start: Point, end: Point) {
		this.start = start;
		this.end = end;
		this._overlapping = [];
	}

	pushNewOverlap(point: Point) {
		this._overlapping.push(point);
	}

	containsOverlappingPoint(point: Point): boolean {
		return this._overlapping.includes(point);
	}

	getLinePoints(): Point[] {
		let counter: Point[] = [];

		const minY: number = Math.min(this.start.y, this.end.y);
		const minX: number = Math.min(this.start.x, this.end.x);

		const minPointY: Point = (this.start.y < this.end.y) ? this.start : this.end;
		const maxPointY: Point = (this.start.y >= this.end.y) ? this.start : this.end;


		if (this.start.x == this.end.x) {
			for (let i = 0; i <= Math.abs(this.start.y - this.end.y); i++) {
				counter.push(new Point(this.start.x, minY + i))
			}
			return counter;
		} else if (this.start.y == this.end.y) {
			for (let i = 0; i <= Math.abs(this.start.x - this.end.x); i++) {
				counter.push(new Point(minX + i, this.start.y))
			}
			return counter;
		} else if (minPointY.x < maxPointY.x) {
			for (let i = 0; i <= (maxPointY.x - minPointY.x); i++) {
				counter.push(new Point(minPointY.x + i, minPointY.y + i))
			}
			return counter;
		} else if (minPointY.x > maxPointY.x) {
			for (let i = 0; i <= (minPointY.x - maxPointY.x ); i++) {
				counter.push(new Point(minPointY.x - i, minPointY.y + i))
			}
			return counter;
		}

		return counter;
	}
}