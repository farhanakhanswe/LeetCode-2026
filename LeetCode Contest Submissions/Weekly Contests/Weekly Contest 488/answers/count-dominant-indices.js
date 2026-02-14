/* optimized soln in progress */

// Solution 1: Time Complexity: O(n^2) & Space Complexity: O(1)
// Thought process for the solution is at the end of it

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums) {
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

};

/* Thought Process for Solution 1 */

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

/* ---------------------------------------------------------------------------------------------------------*/

// Solution 2: Time Complexity: O(n) & Space Complexity: O(n)
// Thought process for the solution is at the end of it

var dominantIndices = function (nums) {

    let totalSum = 0;

    // find the total sum of all the elements
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    // create a hashmap; key is the index and value is the sum of all the elements from the current element till the end
    let map = new Map();
    map.set(0, totalSum);

    for (let i = 1; i < nums.length; i++) {
        let suffixSum = map.get(i - 1) - nums[i - 1];
        map.set(i, suffixSum);
    }

    // find dominant indices
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > map.get(i + 1) / (nums.length - i - 1)) {
            count++;
        }
    }

    return count;

};

/* Thought Process for Solution 2 */

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
// in this example, im adding elements from index 3 till the end twice

// lets say for i = 0, i store the sum of all the elements in the variable -> totalSum
// create a map where the key is the index number and value is the sum of elements from that index to the end
// for i = 1, I store totalSum - nums[0], then that will give me sum from index = 1 till the end
// for i = 2, I store totalSum - nums[0] - nums [1], then that will give me sum from index = 2 till the end
// for i = 3, I store totalSum - nums[0] - nums[1] - nums[2], then that will give me sum from index = 3 till the end

// now, that means
// for i = 1, totalSum - nums[0]
// for i = 2, (suffixsum of i = 1) - nums[1]
// for i = 3, (suffixsum of i = 2) - nums[2]
// for i = 4, (suffixsum of i = 3) - nums[3]

// now that we have the map, lets do the operation of finding the dominant indices
// we will take a new loop and iterate over each num
// for i loop, we will look for suffix (i + 1) and compare if nums[i] > suffixsum(i+1)/(nums.length - i - 1)
// if it is dominant, we can increase the count for dominant indices
