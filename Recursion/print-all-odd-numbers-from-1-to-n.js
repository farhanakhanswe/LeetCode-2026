function printEven(n) {
    if (n < 2) return;

    printEven(n - 1);

    if (n % 2 !== 0) {
        console.log(n);
    }
}