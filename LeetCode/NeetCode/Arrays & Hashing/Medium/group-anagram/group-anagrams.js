/**
 * Question Link: https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // we are given a bunch of strings and we need to isolate them in subarrays based on who's an anagram to who
    // if a word does not have an anagram then we will just return that word in a sub array
    // we will then add the sub array to the final array and return it on any order
    // all of them are lowercase english letters in this question so we dont have to add logic to make the words lowercase

    // preparing soln:
    // we can create a map where key is the sorted string and value is the list of anagrams that become this sorted string after sorting

    if (strs.length < 1) return [];
    let sortedStrMap = new Map()

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');

        if (sortedStrMap.has(sortedStr)) {
            sortedStrMap.get(sortedStr).push(strs[i]);
        } else {
            sortedStrMap.set(sortedStr, [strs[i]]);
        }
    }

    let groupOfAnagrams = [];

    for (const value of sortedStrMap.values()) {
        groupOfAnagrams.push(value)
    }


    return groupOfAnagrams;
}
