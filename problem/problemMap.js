function map(elements, getSquare){
    let arr =[];
    for(var i=0; i<elements.length; i++){
        arr[i] = getSquare(elements[i]);
    }
    return arr;
}

function getSquare(item){
    return item*item;
}

module.exports = {map, getSquare};