/* Question Link: https://leetcode.com/problems/find-the-smallest-balanced-index/
   The following solution was submitted during the contest period.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestBalancedIndex = function (nums) {
    // int arr nums
    // an index i is balanced if the sum of elements strictly to the left of i = the product of elements strictly to the right of i
    // if there are no el to the left, the sum is considered 0
    // if there are no el to the right, the product is 1

    // so check sum   of left = product of right

    // return an int denoting the smallest balanced index. If no balanced index exists, return -1

    // so we can traverse through the arr, sum is initially 0 and product is 1
    // we use a nested loop to find the sum of the all the elements on the left
    // and find the product of all the elements on the right
    // we then check if sum = product
    /*
    let smallestBalancedIndex = -1;

    for(let i = 0 ; i < nums.length; i++){
        let sum = 0;
        let product = 1;

        for(let j = 0; j < i ; j++){
            sum += nums[j];
        }

        for(let k = i + 1; k < nums.length; k++){
            product = product * nums[k];
        }

        if(sum === product){
            smallestBalancedIndex = i;
            break;
        }
        
    }

    return smallestBalancedIndex;
    */
    // time limit exceeded for the above soln

    // so lets think a better approach
    // if i know the sum of elements before an element in the arr and store it in  map where key is the index and value is the sum of the numbers 
    // before that index. we can move left to right in the arr to create this map

    // for product, we can reverse the array and create another map that will store the product of the elements where the key is the index and 
    // value would be the product of all the elemnts on the right

    if (nums.length < 1) return -1;

    let smallestBalancedIndex = -1;
    let sumMap = new Map();
    sumMap.set(0, 0)
    let productMap = new Map();
    productMap.set(nums.length - 1, 1)
    let sum = 0;
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i + 1 < nums.length) {
            sumMap.set(i + 1, sum);
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        product = product * nums[i];
        if (i - 1 >= 0) {
            productMap.set(i - 1, product);
        }
    }


    for (let i = 0; i < nums.length; i++) {
        if (sumMap.get(i) === productMap.get(i)) {
            smallestBalancedIndex = i;
        }
    }

    return smallestBalancedIndex;
};
