/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // we are given a bunch of strings and we need to isolate them in subarrays based on who's an anagram to who
    // if a word does not have an anagram then we will just return only that in a sub array
    // we will then add the sub array to the array and return it any orer
    // all of them are lowercase english letters in this question so we dont have to add logic to make the words lowercase

    // preparing soln:
    // we can create a map where key is the string and value is the sorted string
    // we then loop over the map and find the many keys having the same value and store them in a sub array
    // we then add all the sub arrays to a final array and return that

    // incomplete soln:
    
    let strMap = new Map()

    for (let i = 0; i < strs.length - 1; i++) {
        if (!strMap.has(strs[i])) {
            sortedStr = strs[i].sort();
            strMap.set(strs[i], sortedStr)
        }
    }

}


