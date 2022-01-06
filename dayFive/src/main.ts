import { getData } from './getData';
import { partOne } from './partOne';
import { partTwo } from './partTwo';


console.log("Answer of part 1 = "+ partOne(getData("data.txt")));
console.log("Answer of part 2 = "+ partTwo(getData("data.txt")));