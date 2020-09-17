function reverseArray(arr){
    let reversedArr = [];

    for (let element of arr) {
        reversedArr.unshift(element);
    }

    return reversedArr;
}

function reverseArrayInPlace(arr){
    for (i = 0; i < arr.length; i++) {
        let bottom = arr[i];
        let top = arr[arr.length - 1 - i];
        arr[i] = top;
        arr[arr.length - 1 - i] = bottom;
    }

    return arr;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,3,4,5]))