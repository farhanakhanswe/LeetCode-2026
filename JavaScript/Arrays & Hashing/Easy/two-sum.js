/**
   Question Link: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Solution 1: */
var twoSum = function(nums, target) {
    if(nums.length < 2) return [1,-1];

    const numsMap = new Map();

    for(let i = 0 ; i < nums.length; i++){
        let diff = target - nums[i];

        if(numsMap.has(diff)){
            return[i, numsMap.get(diff)];
        }

        numsMap.set(nums[i], i);
    }

    return [-1, -1];
};

/* Solution 2: */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 2){
        return [-1, -1];
    }

    const sortedArr = [...nums].sort((a,b) => a - b);
    let firstPtr = 0;
    let lastPtr = nums.length - 1;

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
