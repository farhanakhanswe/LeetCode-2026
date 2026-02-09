/* optimized soln in progress */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums) {
    // im given an array nums of length n
    // an element at index i is called dominant 
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

    // preparaton of a more optimized soln
    // can we have a condition that stops the child loop from iterating?
    // any point when we do not have to calc the avg for the curr el?
    // let's say if there's a larger number in the child loop
    // let's say curr element is 5 and arr is [1,2,5,2,2,2,2,7]
    // so the avg of (2+2+2+2+7)/5 is 3
    // 5 is > 3 so doing a check on if parent el is smaller than the child el wouldn't help
    // what if we used while loop for two pointer technique
    // if i sort the numbers, does it improve the soln in any way?
    // seems like sorting wouldn't make a difference

    // let's start over
    // suffix is everything from some index to the end of the array
    // for each parent loop iteration, i'm adding some of the same numbers again and again in the child loop
    // what if i do not add the same numbers again and again and somehow store the suffixes
    // for example:
    // for i = 0 in parent loop, i'm adding all the numbers from i = 1 till the end
    // for i = 1 in parent loop, i'm adding all the numbers from i = 2 till the end



};