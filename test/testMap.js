const {map, getSquare} = require('../problem/problemMap');
const item = [1,2,3,4,5,5];

const result = map(item, getSquare);
console.log(result);