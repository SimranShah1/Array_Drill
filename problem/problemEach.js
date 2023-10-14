function eachFunction(elements, cb){
    for(let index=0; index<elements.length; index++){
        cb(elements[index], index);
    }
}
function cb(item, index){
    console.log(`Element at index ${index} is ${item}`);
}

module.exports = {eachFunction, cb};