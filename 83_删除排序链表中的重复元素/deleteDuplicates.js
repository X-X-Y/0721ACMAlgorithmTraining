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
var deleteDuplicates = function(head) {
    if(head == null){
        return null;
    }
    let left = head;
    let right = head;
    while(right != null){
        if(right.val != left.val){
            left.next = right;
            left = right;
        }
        right = right.next;
    }
    left.next = null;
    return head;
};









