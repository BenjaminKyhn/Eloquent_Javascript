function deepEqual(a, b) {
    if (typeof (a) === "object" && typeof (b) === "object") {
        let keysA = Object.keys(a)
        let keysB = Object.keys(b);

        if (keysA.length != keysB.length){
            return false;
        }

        for (const key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
                return false;
            }
        }
    }
    else if (a == null || b == null){
        return false;
    }
    else if (a !== b) {
        return false;
    }

    return true;
}

let objectA = {
    colour: "green",
    form: "solid"
};

let objectB = {
    colour: "purple",
    form: "liquid"
}

let objectC = {
    colour: "purple",
    form: "liquid"
}


console.log(deepEqual(objectA, objectB));
console.log(deepEqual(objectA, objectC));
console.log(deepEqual(objectB, objectC));
console.log(deepEqual(2, 2));
console.log(deepEqual(13, 67));