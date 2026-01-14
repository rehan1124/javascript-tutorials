/**
 * Plus One (66): Increment a large number represented as an array of digits (array manipulation).
 */

function plusOne(digits, version) {
    console.log(`Digits: ${digits}; Version: ${version}`);

    if (version === 'v1') {
        return String(Number(digits.join('')) + 1).split('');
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] < 10) {
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    
    return digits;
}

console.log(plusOne([1, 2, 3], 'v1'));
console.log(plusOne([4, 3, 2, 1], 'v2'));
console.log(plusOne([9, 9, 9], 'v2'));
