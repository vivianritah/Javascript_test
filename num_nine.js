// Fibonacci Numbers

function fibonacci(n) {
    let fibSeries = [1, 1];
    while (true) {
        let nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        if (nextFib > n) break;
        fibSeries.push(nextFib);
    }
    return fibSeries;
}

const fibonacciSeries = fibonacci(100);
console.log("Fibonacci numbers:");
console.log(fibonacciSeries);

