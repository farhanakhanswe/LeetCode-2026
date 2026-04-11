/**
 * @param {string} s
 * @return {number}
 */
var mirrorFrequency = function (s) {
    // i am given a string s consisting of lowercase english letters and digits
    // for each char, the mirror of a char is the letter at the same position from the end of the alphabet
    // for example, the mirror of 'a' is 'z' and the mirror of 'b' is 'y', and so on

    // for digits, the mirror of a char is the digit at the same position from the end of the range '0' to '9'
    // for exp, the mirror of '0' is '9' and the mirror of '1' is '8' and so on

    // for each unique char c in the string:
    // let m be its mirror character
    // let freq(x) denote the number of times character x appears in the string
    // compute the absolute diff between their frequencies, defined as freq(c) - freq(m)
    // the mirror pairs (c,m) and (m,c) are the sam eand must be counted only once
    // return an int denoting the total sum of these valus ovr all such distinct mirror pairs

    // thought process
    // i can use a map to keep track of the char/num with it's count in the str

    // i can create another map where key is char and value is mirror char

    // i can then travserse through string s and check if the mirror char exists, if it does then i compute the abs diff and add to the total sum

    // i can keep track of the pair we have already computed with, as the mirror pairs (c,m) and (m,c) are the same and must be countd only once

    const alphabets = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let mirrorCharMap = new Map();

    // lets say first el is pos 0 then last el pos is len - 1
    // 2nd el is pos 1 and the last el pos is len - 2
    // 3rd el is pos 2 and the last el pos is len - 3
    // so whatever pos is from the left, we add 1 to it and then subtract that by len

    // fill the map 

    for (let i = 0; i < 26; i++) {
        mirrorCharMap.set(alphabets[i], alphabets[26 - (i + 1)]);
    }

    for (let i = 0; i < 10; i++) {
        mirrorCharMap.set(nums[i], nums[10 - (i + 1)]);
    }

    let charFreqMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (charFreqMap.has(s[i])) {
            charFreqMap.set(s[i], charFreqMap.get(s[i]) + 1);
        } else {
            charFreqMap.set(s[i], 1);
        }
    }

    // find the total sum
    // we need to keep track of the pairs we have already added 

    let total = 0;
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        let m = mirrorCharMap.get(c);

        let key = [c, m].sort().join("");

        if (set.has(key)) {
            continue;
        }

        set.add(key);

        let freqC = charFreqMap.get(c) || 0;
        let freqM = charFreqMap.get(m) || 0;

        total += Math.abs(freqC - freqM);
    }


    return total;
};