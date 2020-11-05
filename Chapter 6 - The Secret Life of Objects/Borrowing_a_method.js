let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
console.log(Object.prototype.hasOwnProperty.call(map, "three"));
// → false
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty"));
// → true