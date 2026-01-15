/**
   Question Link: https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length < 2) return false;

    let map = new Map();

    for(let i = 0; i < nums.length ; i++){
        if(map.has(nums[i])){
            return true;
        }else{
            map.set(nums[i], 1)
        }
    }

    return false;
};
