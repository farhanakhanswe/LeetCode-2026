// Question Link: https://leetcode.com/problems/smallest-pair-with-different-frequencies
// The following solution was submitted during the contest period. 


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function (nums) {
    // nums array
    // each num has a freq which is the number of times it has occured
    // we can use a map to store that

    // consider all pairs of distinct values x and y
    // x < y
    // x and y have different frequences in nums
    // so x and y are two distinct nums
    // x < y
    // the frequences of x cannot match y
    // choose the smallest possible value of x
    // if muliple pairs have the same x, choose the one with the smallest
    // possible value of y

    // lets say we have the num with freq in the map
    // lets say the first el is x
    // now we can iterate nums from the 2nd element 
    // we check if curr el < x, if it is then x = curr el
    // we can then check if there is a value that's smaller than that x in the map
    // if there is then we find the smallest value and the curr el in the loop can become the y value then x can be less than y
    // but the freq of x cannot be freq of y

    // after finding x we can then find numbers that are less than x and has
    // differen freq

    // lets start over
    // lets sort nums that way the first el is the smallest and it will be x
    // we then look for the second smallest num which will be y and x will be less than y

    nums.sort((a, b) => a - b);

    if (nums.length <= 1) {
        return [-1, -1];
    }

    let map = new Map();
    var x = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    let y = 0;

    for (const [key, value] of map) {
        if (key > x && map.get(key) !== map.get(x)) {
            y = key;
            break;
        }
    }

    if (y === 0) return [-1, -1];

    for (const [key, value] of map) {
        if (key < x && map.get(key) !== map.get(y)) {
            x = key;
        }

    }

    return [x, y];

};