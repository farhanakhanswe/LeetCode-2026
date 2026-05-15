/**
 * Link: https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let num = init;
    return {
        increment: function () {
            return num = num + 1;
        },
        decrement: function () {
            return num = num - 1;
        },
        reset: function () {
            return num = init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/* 
    Notes:

    This question is a good way to test how much you've already learned from the other questions under the 
    Closures section. Please take a look at their notes so that you can fully grasp what's happening here.
    
    Once that's done, let's move forward to the following:
    
    (1) We have to store the initial value of init in a variable so that we can later use it for resetting
    (2) The returned object will contain three closures as properties and we can call each of these closures using the
        object's dot notation
        
   
        const counter = createCounter(5)
        counter.increment(); // 6
        counter.reset(); // 5
        counter.decrement(); // 4

*/