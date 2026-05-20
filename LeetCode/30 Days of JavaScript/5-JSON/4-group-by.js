/**
 * Question Link: https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};

    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(this[i]);
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */