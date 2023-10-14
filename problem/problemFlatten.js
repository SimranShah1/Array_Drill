function flatten(elements){
    let flatArray = [];
     function recursiveFlatten(innerArr){
        for(let i=0; i<innerArr.length; i++){
            if(Array.isArray(innerArr[i])){
                recursiveFlatten(innerArr[i]);
            }
            else{
                flatArray[flatArray.length] = innerArr[i];
            }
        }
     }

     recursiveFlatten(elements);
     return flatArray;
}

module.exports = flatten;