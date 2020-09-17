function range(start, end, step = 1){
    let numbers = [];

    if (start < end){
        for (i = start; i <= end; i += step) {
            numbers.push(i);
        }
    }
    else if (start > end){
        for (i = start; i >= end; i += step) {
            numbers.push(i);
        }
    }


    return numbers;
}

function sum (numbers){
    let sum = 0;

    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sum(range(1,10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1))