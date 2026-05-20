// Question Link: Question Link: https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};

/* 
    Notes:

    (1) The question can seem confusing when you read the examples that use different filtering functions. 
        But, it does not matter what the filtering function logic is about. 

    (2) The question says that the filteredArr will only contain the elements from the arr for which the 
        expression fn(arr[i], i) evaluates to a truthy value. So, for the solution, we simply have to call
        the fn function, and pass the two arguments - arr[i] and i. If the function returns a truthy value, 
        we will push the element to the filteredArr.

*/