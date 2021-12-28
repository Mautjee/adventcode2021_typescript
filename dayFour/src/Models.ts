////////////////////////////////////////////////////////////////
/*
    Models
*/
////////////////////////////////////////////////////////////////

class Row {
	public listNumber :string[];
	public counter :number;

	constructor(number : string[]){
		this.listNumber = number;
		this.counter = 0;
	}
}
class Sheet{
	public vertical : Row[];
	public horizontal : Row[];
	
	constructor(){
		this.horizontal = [];
		this.vertical = [];
	}

	addRow(nRow : Row, isHorizontal : boolean = true){
		if(isHorizontal){
			this.horizontal.push(nRow);
		}else{
			this.vertical.push(nRow);
		}
	}
}

interface Game {
	input :string[],
	sheets:Sheet[]
}

export {Row, Sheet, Game}