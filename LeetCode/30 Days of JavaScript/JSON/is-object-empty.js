/**
 * Question Link: https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};