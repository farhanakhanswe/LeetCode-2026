/**
 * Question Link: https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let map = new Map();

    for (let obj of arr1) {
        map.set(obj.id, obj);
    }

    for (let obj of arr2) {
        if (map.has(obj.id)) {
            let merged = { ...map.get(obj.id), ...obj };
            map.set(obj.id, merged);
        } else {
            map.set(obj.id, obj);
        }
    }

    return Array.from(map.values()).sort((a, b) => a.id - b.id);

};