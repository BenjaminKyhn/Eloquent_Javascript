function countBs(string){
    let bCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B")
            bCount++;
    }

    return bCount;
}

console.log(countBs("String without uppercase b's"));
console.log(countBs("String with uppercase B's"));
console.log(countBs("Based B's"));

function countChar(string, char) {
    let charCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char)
            charCount++
    }

    return charCount;
}

console.log(countChar("String containing many n's", "n"));
console.log(countChar("String containing no uppercase n's", "N"));