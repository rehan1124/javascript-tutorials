function strCompression(sampleStr) {
    const charCount = {};

    console.log('Input string:', sampleStr);

    for (let chars of sampleStr) {
        charCount[chars] = (charCount[chars] || 0) + 1;
    }

    let compressedStr = '';
    for (let keys in charCount) {
        compressedStr += `${keys}${charCount[keys]}`;
    }

    return compressedStr;
}

console.log(strCompression('aaabbcc'));
console.log(strCompression('abcd'));
console.log(strCompression(''));
