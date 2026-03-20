/**
 * Question Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */

/* Solution 1: Time complexity: O(n log n)  */

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let longest = 1;
    let count = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i] + 1) {
            count++;
        } else if (nums[i + 1] !== nums[i]) {
            count = 1;
        }

        longest = Math.max(longest, count);
    }

    return longest;

};

/* Solution 2 : Time Complexity: O(n) */

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums); // we do this to avoid duplicate values and for fast lookup O(1)
    let longest = 0;

    // now we would look for the starting number of the longest sequence
    // and we do this by checking if the previous number of the curr num in for loop exists

    for (let num of set) {
        if (!set.has(num - 1)) {
            // if the set doesn't have the previous number then we know the curr num is the starting point of sequence
            let current = num;
            let count = 1;

            // now lets find the length of the sequence

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            // now lets find the longest sequence 

            longest = Math.max(longest, count);
        }
    }

    return longest;

};