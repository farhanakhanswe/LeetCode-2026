/**
 * Question Link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
    let returnedArr = [];

    for (let i = 0; i < arr.length; i++) {
        returnedArr.push(fn(arr[i], i));
    }

    return returnedArr;
};

/*
    Notes:

    (1) The question mentions about mapping and the Array.map method. This is not related to the Map object that 
        stores data as key-value pairs.
        
    (2) A callback function is a function that is passed into another function to be executed later.
        The Array.map() method creates a new array and passes each element in the original array to a callback 
        function which performs operations on the element and transforms it. The transformed value is then placed at 
        the corresponding index in the new array. The original array stays unmodified.

    (3) For this question, we were asked to not use the Array.map() function and rather create our own map method. 
        In this solution, we are manually transforming each element in array by passing it into a callback function 
        and then storing the transformed value in a new array, following how the Array.map() works.

*/