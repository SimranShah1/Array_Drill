function filter(elements, cb){
    let arr = [];
    let j=0;
   for(let i=0; i<elements.length; i++){
       if(cb(elements[i])){
          //arr.push(elements[i]);
          arr[j++]=elements[i];
       }
   }
   return arr;
}


function cb(items){
   return items%2 == 0;
}

module.exports = {filter, cb};