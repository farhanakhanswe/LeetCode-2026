/* Question Link: https://leetcode.com/problems/smallest-stable-index-i/
   The following solution was submitted during the contest period. 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    // int arr nums of len n and interger k
    // for each i, define its instability score as max... - min..
    // max(nums[0..i]) is the largest value among the elements from index 0 to index i
    // so as we traverse through the arr, we have to keep a sum to check if the ith el is the max ??
    // min(nums[i...n-1]) is the smallest value among the elements from index i to index n -1 
    // index n - 1 is the last el
    // an index  is called stable if its instability score is less than or equal to k
    // return the smallest stable index

    // thought process
    // instability score of a curr ith el in arr = max from index 0 till that curr el - min from  curr index till the last el
    // after finding the score we need to check if the score <= k
    // if it is then we also need to check if it is the smallest stable index

    // we can keep a prefix sum map
    // as we go from left to right we keep a track of the max el at each position
    // as we go from right to left, we keep a track of the min el at each position

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

    let smallestStableIndex = 1000;

    for (let i = 0; i < nums.length; i++) {
        let score = prefixMap.get(i) - suffixMap.get(i);

        if (score <= k) {
            smallestStableIndex = Math.min(i, smallestStableIndex);
        }
    }

    return smallestStableIndex === 1000 ? -1 : smallestStableIndex;
};