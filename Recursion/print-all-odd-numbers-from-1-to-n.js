function printOdd(n) {
    if (n < 1) return;

    printOdd(n - 1);

    if (n % 2 !== 0) {
        console.log(n);
    }
}