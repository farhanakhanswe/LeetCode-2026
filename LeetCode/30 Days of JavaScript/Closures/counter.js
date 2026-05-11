/**
 * Question Link: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/*
  Notes:

  (1) Function parameters act like local variables. So, when we call the createCounter() and pass an int as argument,
      we assign the local variable n that value.

  (2) Closures have access to the local variables in the parent function and it remembers the last values assigned to 
      them even after the parent function has stopped executing; which is why we can keep calling the createCounter() 
      to increase the count.

  (3) n++ first returns the value and then increments n by 1 which is why the first value returned is n and not n + 1.

*/