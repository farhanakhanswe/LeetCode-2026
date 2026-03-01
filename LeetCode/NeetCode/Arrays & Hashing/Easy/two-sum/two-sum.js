/**
   Question Link: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Solution 1: HashMap Approach */
var twoSum = function(nums, target) {
    if(nums.length < 2) return [1,-1];

    const numsMap = new Map();

    // we store the num as key and the index of it as value in the map as we iterate over the array given conditions met
    // for each iteration we find the difference between the curr el and the target
    // we then check if this difference exists in the map as a key
    // if it does then we have our answer, we return the indices for both the elements

    for(let i = 0 ; i < nums.length; i++){
        let diff = target - nums[i];

        if(numsMap.has(diff)){
            return[i, numsMap.get(diff)];
        }

        numsMap.set(nums[i], i);
    }

    return [-1, -1];
};

/* Solution 2: Two Pointer Approach */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 2){
        return [-1, -1];
    }

    const sortedArr = [...nums].sort((a,b) => a - b); // sort the array
    let firstPtr = 0;
    let lastPtr = nums.length - 1;

    // since the array is sorted we know the numbers on the left will be smaller than the ones on the right
    // we can use pointer technique to move from left and right towards eachother
    // we can add the numbers and check if the sum is greater or less than the target
    // if the sum is less than the target, we have to increase one of the numbers to increase the sum 
    // in this case, we increase number by moving the left pointer to the right
    // if the sum is more than the target, we have to decrease the sum by reducing one of the numbers
    // in this case, we decrease the number by moving the right pointer to left

    while(firstPtr < lastPtr){
        let sum = sortedArr[firstPtr] + sortedArr[lastPtr];
        if(sum === target){
           return [nums.indexOf(sortedArr[firstPtr]), nums.lastIndexOf(sortedArr[lastPtr])];
        }   

        if(sum < target){
            firstPtr++;
        }else{
            lastPtr--;
        }
    }

    return [-1,-1];
};
