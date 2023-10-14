const flatten = require('../problem/problemFlatten');

const nestedArray = [1, [2], [[3]], [[[4]]]]; 

let result = flatten(nestedArray);
console.log(result);