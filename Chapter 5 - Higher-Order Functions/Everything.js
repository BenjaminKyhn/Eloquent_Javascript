function every1(array, predicate){
    for (let element of array){
        if (!predicate(element)){
            return false;
        }
    }
    return true;
}

function every2(array, predicate){
    if (!array.some(element => !predicate(element))){ // if it's false that some elements of the array is false, then they must all be true
        return true;
    }
    return false;
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true> n < 10));