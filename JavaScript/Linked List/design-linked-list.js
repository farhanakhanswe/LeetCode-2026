/* Question Link:  https://leetcode.com/problems/design-linked-list/ */

var MyLinkedList = function() {
    this.size = 0;
    this.head = {val: 0, next: null};
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
   if(index < 0 || index >= this.size) return -1;

   let curr = this.head.next;
   for(let i = 0; i < index; i++){
       curr = curr.next;
   }

   return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0) index = 0;
    if(index > this.size) return;

    let prev = this.head;
    for(let i = 0; i < index; i++){
        prev = prev.next;
    }

    const node = {val: val, next: prev.next};
    prev.next = node;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;

    let prev = this.head;
    for(let i = 0; i < index; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
