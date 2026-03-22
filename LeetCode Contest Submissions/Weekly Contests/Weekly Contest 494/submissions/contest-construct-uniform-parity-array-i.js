/* Question Link: https://leetcode.com/problems/construct-uniform-parity-array-i/
   The following solution was submitted during the contest period. 
   It is incorrect.
*/

/**
 * @param {number[]} nums1
 * @return {boolean}
 */

var uniformArray = function (nums1) {

    let firstEl = nums1[0];
    let isEven = firstEl % 2 === 0;
    let nums2 = [];
    let isPossible = false;
    let secondEl;

    if (isEven) {
        for (let i = 0; i < nums1.length; i++) {
            firstEl = nums1[i];
            secondEl = undefined;

            for (let j = 0; j < nums1.length; j++) {
                if (i !== j) {
                    if (nums1[j] % 2 === 0) {
                        secondEl = nums1[j];
                        break;
                    }
                }
            }

            if (firstEl % 2 === 0) {
                nums2.push(firstEl);
                isPossible = true;
            } else if (secondEl !== undefined && (firstEl - secondEl) % 2 === 0) {
                nums2.push(firstEl - secondEl);
                isPossible = true;
            } else {
                isPossible = false;
                break;
            }
        }
    } else {
        for (let i = 0; i < nums1.length; i++) {
            firstEl = nums1[i];
            secondEl = undefined;

            for (let j = 0; j < nums1.length; j++) {
                if (i !== j) {
                    if (nums1[j] % 2 !== 0) {
                        secondEl = nums1[j];
                        break;
                    }
                }
            }

            if (firstEl % 2 !== 0) {
                nums2.push(firstEl);
                isPossible = true;
            } else if (secondEl !== undefined && (firstEl - secondEl) % 2 !== 0) {
                nums2.push(firstEl - secondEl);
                isPossible = true;
            } else {
                isPossible = false;
                break;
            }
        }

    }


    return isPossible;

}