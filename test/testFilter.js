
let {filter, cb} = require('../problem/problemFilter');
const items = [1,2,3,4,5,5];

const result =  filter(items, cb);
console.log(result);