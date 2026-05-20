/**
 * Question Link: https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        let result = [];

        for (let item of obj) {
            let compacted = compactObject(item);

            if (Boolean(compacted)) {
                result.push(compacted);
            }
        }

        return result;

    } else if (obj !== null && typeof obj === "object") {
        let result = {};

        for (let key in obj) {
            let compacted = compactObject(obj[key]);

            if (Boolean(compacted)) {
                result[key] = compacted;
            }
        }

        return result;
    }

    return obj;
};