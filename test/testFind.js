
const {find, cb} = require('../problem/problemFind');
const items = [1, 2, 3, 4, 5, 5];


const result = find(items, cb, 6);
console.log(result);