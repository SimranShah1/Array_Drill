let {reduce, cb} = require('../problem/problemReduce');


const items = [1, 2, 3, 4, 5, 5];

const result = reduce(items,cb,0);
console.log(result);

