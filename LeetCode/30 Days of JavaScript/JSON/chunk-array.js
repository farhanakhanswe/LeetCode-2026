/**
 * Question Link: https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};
