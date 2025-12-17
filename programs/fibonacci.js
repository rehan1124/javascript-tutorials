"use strict";

function fibo(n) {
    const fiboSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }

    return fiboSeries.slice(0, n);
}

const fib1 = fibo(1);
console.log('Fibo 1 item:', fib1);

const fib2 = fibo(2);
console.log('Fib 2 items:', fib2);

const fib3 = fibo(3);
console.log('Fib 3 items:', fib3);

const fib10 = fibo(10);
console.log('Fib 10 items:', fib10);