/**
 * Question Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    /*
       For each element in the array, the function fn performs an operation on it, 
       and we must return a new array containing the result of that operation for each element.
    */
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }

    return result;
};