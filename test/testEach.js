const {eachFunction, cb} = require('../problem/problemEach');
const items = [1,2,3,4,5,5];

const result = eachFunction(items, cb);
console.log(result);