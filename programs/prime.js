"use strict";

function isPrime(n) {
    console.log('n:', n);

    if (n === 0 || n === 1) return false;

    if (n === 2) return true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true

}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(10));
console.log(isPrime(13));
// console.log(isPrime(13));

