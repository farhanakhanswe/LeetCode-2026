// Question Link: https://leetcode.com/problems/minimum-cost-to-equalize-arrays-using-swaps/
// The following solution was submitted during the contest period. It is not correct.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minCost = function (nums1, nums2) {
    // swap within the same array with two indices i and j. The operation is free of charge
    // swap between two arrays: choose an index i and then swap nums1[i] and nums[i]. this op incurs at a  cost of 1
    // return an int denoting the minimum cost to makes nums1 and nums2 identical.

    // goal is to make two arrays identical with the minimum cost
    // swapping within the same array is free of cost
    // swapping the els belonging to the same index in the two arrays will incur a cost of 1

    // so lets say nums1 = [10,20] nums2= [20,10]
    // so if we swap 20 with 10 in nums2, nums2 becomes identical to nums1

    // lets say we keep num1 as it is and we play around with num2
    // lets first think about swapping within the same array
    // we keep checking if the values for the same indice in num1 and num2 are the same and when we see there they are not
    // we check if there's any value on the right in the num2 array that matches with the value in the same indice of num1

    let cost = 0;

    swapWithinNum2(nums1, nums2);

    if (JSON.stringify(nums1) === JSON.stringify(nums2)) {
        return cost;
    }

    // now, even after swapping el within num2, the two arr are not the same, we can try swapping elements 
    // 
    for (let i = 0; i < nums2.length; i++) {
        if (nums1[i] !== nums2[i]) {
            let temp = nums1[i];
            nums1[i] = nums2[i];
            nums2[i] = temp;
            cost++;
            swapWithinNum2(nums1, nums2);
            if (JSON.stringify(nums1) === JSON.stringify(nums2)) {
                return cost;
            }
        }
    }


    return -1;

};

var map = new Map();

var swapWithinNum2 = function (nums1, nums2) {
    for (let i = 0; i < nums2.length; i++) {
        if (nums1[i] !== nums2[i]) {
            for (j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    let key = findKeyOfNumInMap(nums1[i]);
                    if (i < key) {
                        let temp = nums2[i];
                        nums2[i] = nums2[j];
                        nums2[j] = temp;
                        map.set(i, nums[i]);
                        break;
                    }
                }
            }
        }
    }
}

var findKeyOfNumInMap = function (num) {
    for (const [key, val] of map) {
        if (num === value) {
            return key;
        }
    }
}

// i think we need to check if the same number is already swapped within num2 before 
/* failed test case
nums1 =
[1,2,2,1]
nums2 =
[1,1,2,2]  -> first swap [1,2,1,2]
Output
2
Expected
0

var swapWithinNum2 = function(nums1, nums2){
    for(let i = 0 ; i < nums2.length; i++){
        if(nums1[i] !== nums2[i]){
            for(j = 0; j < nums2.length; j++){
                if(nums1[i] === nums2[j]){
                    let temp = nums2[i];
                    nums2[i] = nums2[j];
                    nums2[j] = temp;
                    break;
                }
            }
        }
    }
}

so let say before we swap we check if the same number was swapped before by checking with a map.we can keep the key as num nad value as indice
and check the curr iteration number. if the curr iteration number is more than the indice in the map it means that number has already been swapped
and we can ignore it

okay i has to be key and value has to be num as there could be same number multiple times

*/