"use strict"




const obj = {
    a:56,
    b:45
}

function copy(mainObj) {
    let objCopy = {};
    for(let key in mainObj) {
        objCopy[key] = mainObj[key];

    }
    return objCopy;
}
const newCopy = copy(obj);

console.log(obj);
console.log(newCopy);

newCopy.a = 8988;
console.log(obj);
console.log(newCopy);