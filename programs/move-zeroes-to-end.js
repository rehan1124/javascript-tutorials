function moveZerosToEnd(arr) {
    const zeros = [];
    const nonZeros = [];

    console.log('Input array:', arr);

    for (let items of arr) {
        if (items === 0) {
            zeros.push(items);
        } else {
            nonZeros.push(items);
        }
    }

    return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd([0, 0, 0, 1, 2, 3]));
console.log(moveZerosToEnd([1, 0, 2, 0, 3, 0]));
console.log(moveZerosToEnd([1, 2, 3,]));
