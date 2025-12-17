function missingNumber(arr) {
    console.log('Array passed for check:', arr);

    if (arr.length < 2) return '1 or less numbers present';

    for (let i = 0; i < arr.length - 1; i++) {
        let currentItem = arr[i];
        if ((currentItem + 1) !== arr[i + 1]) return `${currentItem + 1} is missing`;
    }

    return 'No missing items';
}

console.log(missingNumber([]));
console.log(missingNumber([3]));
console.log(missingNumber([3, 4, 6]));
console.log(missingNumber([10, 11, 12, 14, 15]));
console.log(missingNumber([10, 11, 12, 13, 14, 15]));
