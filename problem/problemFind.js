function find(elements, cb, findElement) {
    for (var i = 0; i < elements.length; i++) {
        if (cb(elements[i], findElement)) {
            return elements[i];
        }
    }
    return undefined;
}


function cb(items, findElement) {
    return items == findElement;
}

module.exports = { find, cb };