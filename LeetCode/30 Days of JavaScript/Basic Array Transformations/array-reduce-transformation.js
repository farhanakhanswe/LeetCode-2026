/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    // what I have to do here is pass "init" as the first argument the first time
    // and afterwards, for each iteration, first argument will be the result of the calculation done on the preceding element in the array
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

