/**
 * @param {number[]} nums
 * @return {number}
 */
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