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