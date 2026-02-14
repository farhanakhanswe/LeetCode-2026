// Question Link: https://leetcode.com/problems/count-dominant-indices/
// The following solution was submitted during the contest period.

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums) {
    // im given an array nums of length n
    // an element at index 1 is called dominant 
    // if nums[i] > average(nums[i+1], nums[i+2], nums[i+3], nums[i+4], nums[n-1])
    // count the number of indices i that are dominant
    // the avg of a set of a numbers is the value obtained by adding all the numbers together
    // and dividing the sum by the total number of numbers
    // the rightmost element of any array is not dominant

    // preparation
    // for each iteration we have to see if the curr el is > than the average of the remaining elements
    // on the right
    // the rightmost element of any array is not dominant so we dont have to iterate the loop for that
    // we can have a parent loop to get curr el
    // we then use a child loop to get average of the remaining numbers
    // then we compare if the curr el is greater than the average
    // if it is, we increase count

    let count = 0;


    for (let i = 0; i < nums.length - 1; i++) {
        let currEl = nums[i];
        let sum = 0;
        let totalNum = 0;

        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            totalNum++;
        }

        let avg = sum / totalNum;

        if (currEl > avg) {
            count++;
        }
    }

    return count;
}