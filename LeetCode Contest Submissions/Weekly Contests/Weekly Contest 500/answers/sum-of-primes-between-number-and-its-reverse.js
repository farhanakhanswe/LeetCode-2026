/**
 * Question Link: https://leetcode.com/problems/sum-of-primes-between-number-and-its-reverse/
 * @param {number} n
 * @return {number}
 */

var sumOfPrimesInRange = function (n) {

    const reverseStr = n.toString().split('').reverse().join('');
    const reverseN = parseInt(reverseStr);
    const min = Math.min(n, reverseN);
    const max = Math.max(n, reverseN);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
};

var isPrime = function (num) {

    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}