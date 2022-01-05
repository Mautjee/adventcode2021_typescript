import {getData} from './getData';
import {breeding} from './breeding';

console.log("Answer part one = " + breeding(getData('data.txt'),80));
console.log("Answer part Two = " + breeding(getData('data.txt'),256));