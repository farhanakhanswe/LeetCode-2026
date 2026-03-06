/**
 * Link: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };

    /*
        The inner function is a closure so it remembers the last value assigned to n even after the parent function has stopped executing.
        So, we can keep calling the same object again and again outside the createCounter() and it will keep incrementing the count as the inner function
        remembers the last value so it just increments that and returns it.

        FYI: n++ first prints the n value and then increments it which is why we get the "n" value first and not "n+1"

    */
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */