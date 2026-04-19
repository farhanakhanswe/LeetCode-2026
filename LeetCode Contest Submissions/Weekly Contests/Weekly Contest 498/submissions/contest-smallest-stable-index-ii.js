/* Question Link: https://leetcode.com/problems/smallest-stable-index-ii/
   The following solution was submitted during the contest period. 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    let prefixMap = new Map();
    let suffixMap = new Map();
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        prefixMap.set(i, Math.max(nums[i], max));
        max = Math.max(nums[i], max);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        suffixMap.set(i, Math.min(nums[i], min));
        min = Math.min(nums[i], min);
    }

    let smallestStableIndex = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let score = prefixMap.get(i) - suffixMap.get(i);

        if (score <= k) {
            smallestStableIndex = Math.min(i, smallestStableIndex);
        }
    }

    return smallestStableIndex === Infinity ? -1 : smallestStableIndex;
};