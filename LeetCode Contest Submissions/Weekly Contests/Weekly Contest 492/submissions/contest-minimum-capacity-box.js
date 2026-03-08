/* Question Link: https://leetcode.com/problems/minimum-capacity-box/
   The following solution was submitted during the contest period.
*/

/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
    //  int arr capacity
    //  capacity[i] = capacity of the ith box
    //  itemSize = size of an item

    //  ith box can store the iitem if capacity[i] >= itemSize

    //  Return an int denoting the index of the box with the minimum capacity that can store the item
    //  If multiple such boxes exist, return the smallest index

    //  we can sort the arr and then iterate over each el to find the smallest el that is >= itemSize
    //  we can then look for the index of that

    let sortedArr = [...capacity].sort((a, b) => (a - b));
    let minIndex = -1;

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] >= itemSize) {
            let minimum = sortedArr[i];
            minIndex = capacity.indexOf(minimum);
            break;
        }
    }

    return minIndex;
};