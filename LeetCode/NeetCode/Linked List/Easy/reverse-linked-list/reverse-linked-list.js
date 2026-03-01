/* Question Link: https://leetcode.com/problems/reverse-linked-list */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 
    Solution 1: 
    Time Complexity: O(n)
    Space: O(1)
*/

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null){
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
};


/* 
    Solution 2: Using Recursion
    Time Complexity: O(n)
    Space: O(n)
*/

var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
};