function hasOnlyDigits(str) {
    console.log('Input string:', str);
    // return /[0-9][^a-zA-Z\s]/g.test(str);
    // return /[\d][^a-zA-Z\s]/g.test(str);
    return !(/[^\d]+/g.test(str));
}

console.log(hasOnlyDigits('123'));
console.log(hasOnlyDigits('abc'));
console.log(hasOnlyDigits('a1b2c3'));
console.log(hasOnlyDigits('1 2 3'));
