function sortedArray(sampleArr) {
    console.log('Input array:', sampleArr);

    return sampleArr.sort((a, b) => a - b);
}

// console.log(sortedArray([1, 2]));
// console.log(sortedArray([10, 8, 6, 4, 2, 1, 3, 5, 7, 9]));
// console.log(sortedArray([0, 100, 55, -1]));
// console.log(sortedArray([0]));


function sortedArrayWithForLoop(sampleArr) {
    console.log('Input array:', sampleArr);

    const arrLength = sampleArr.length;
    if (arrLength === 1) return sampleArr;

    for (let i = 0; i < arrLength - i - 1; i++) {
        // console.log('Outer loop:', i);

        for (let j = 0; j < arrLength - i - 1; j++) {
            // console.log('Inner loop:', j, sampleArr);
            if (sampleArr[j] > sampleArr[j + 1]) {
                [sampleArr[j], sampleArr[j + 1]] = [sampleArr[j + 1], sampleArr[j]];
            }
        }
    }

    return sampleArr;
}

console.log(sortedArrayWithForLoop([1, 2]));
console.log(sortedArrayWithForLoop([10, 8, 6, 4, 2, 1, 3, 5, 7, 9]));
console.log(sortedArrayWithForLoop([0, 100, 55, -1]));
console.log(sortedArrayWithForLoop([0]));