// Question Link: https://leetcode.com/problems/merge-close-characters/description/
// The following solution was submitted during the contest period.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var mergeCharacters = function (s, k) {
    // im given a string s consisting of lowercase english letters and 
    // an integer k
    // two equal characters in the current string s are considered CLOSE
    // if the distance between their indices is at most k
    // so that means <= k ??
    // when two chars are close, the right one merges into the left
    // merges happen one at a time
    // after each merge, the string updaes until no more merges are possible
    // so does that mean that merge stops when k is reached ?
    // return the resulting string after performing all possible merges
    // if multiple merges are possible, always merge the pair with the smallest left index
    // if multiple pairs share the smallest left index, choose the pair with the smallest right index

    // so we find a matching char pair
    // when we do, we check if the index diff is <= k
    // if it is we will remove the the second el of the pair
    // merges happen one at a time
    // after merge, we update the string by removing the second el of the pair
    // from the string and we continue we scan again for matching pair from the start
    // we will do this scanning until no more merges are possible
    // we can keep a flag like isNewMerge
    // if we traverse through all the char of the string nad this flag
    // is false we know no new merge happened and we can stop scanning

    // so we can use a for loop to pick a curr el
    // we can then use a while loop to find the matching pair
    // we know the difference between the indexes has to be less than k
    // so in the while loop we can loop that many times to see if there's a matching element

    let str = s;

    for (let i = 0; i < str.length; i++) {
        let isNewMerge = false;
        let j = i + 1;
        while ((j - i) <= k) {
            if (str[i] === str[j]) {
                isNewMerge = true;
                str = str.slice(0, j) + str.slice(j + 1);
            }
            j++;
        }

        if (!isNewMerge) {
            break;
        }
    }

    return str;
};