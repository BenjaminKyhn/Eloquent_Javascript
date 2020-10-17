let arr = [[1, 2, 3], ["a", "b", "c"], [4]]

let newArr = arr.reduce((a, b) => a.concat(b));

console.log(newArr);