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
      these local variables even after the parent function has stopped executing. So, just by calling counter() without passing any arguments to it, 
      we're incrementing the count because the closure remembers the n value in the parent function. So, now all the closure has to do is increment the count.

  (3) Why are we assigning createCounter() function to a variable and then calling it?

        const counter = createCounter(10)
        counter() // 10
        counter() // 11
        counter() // 12

      This is because createCounter() returns a function, which is a closure. We store that closure in the counter 
      variable so that we can reuse the same closure repeatedly.

      If we didn't store it and called the createCounter()() multiple times instead, a new closure would be created
      each time, and n would get reset back to its initial value. For example,

        console.log(createCounter(10)()) // count:10
        console.log(createCounter(10)()) // count:10
        console.log(createCounter(10)()) // count:10

        console.log(createCounter()())   // count : NaN -> Not-a-Number; because n is undefined so when we try
            undefined++, JS tries to convert undefined into a number, but it cannot.

  (4) n++ first returns the value and then increments n by 1 which is why the first value returned is n and not n + 1.

  



*/