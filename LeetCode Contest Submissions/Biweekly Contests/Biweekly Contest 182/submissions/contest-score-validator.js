// Question Link: https://leetcode.com/problems/score-validator/
// The following solution was submitted during the contest period.

/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function (events) {
    // i am given a string array events
    // initially, score = 0 and counter = 0

    // each el in events is one of the following:
    // 0 to 6, add that value to the total score
    // W -> increase the counter by 1 . No score added
    // WD -> add 1 to the total score
    // NB -> add 1 to the total score

    // process the array from left to right. stop processing when either
    // all elements in events have been processed or the counter becomes 10
    // return an int arr [score, counter] where
    // score is the final total score
    // counter s the final total counter value

    let counter = 0;
    let score = 0;

    for (let i = 0; i < events.length; i++) {

        if (counter === 10) return [score, counter];

        if (parseInt(events[i]) >= 0 && parseInt(events[i]) <= 6) {
            score += parseInt(events[i]);
        } else if (events[i] === "W") {
            counter++;
        } else if (events[i] === "WD" || events[i] === "NB") {
            score++;
        }

    }
    return [score, counter];
};