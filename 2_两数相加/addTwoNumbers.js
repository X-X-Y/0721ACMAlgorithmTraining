/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let p = dummy
    let carry = 0

    let p1 = l1
    let p2 = l2
    while(p1 != null || p2 != null || carry > 0){
        if(p1 != null){
            carry += p1.val
            p1 = p1.next
        }
        if(p2 != null){
            carry += p2.val
            p2 = p2.next
        }
        p.next = new ListNode(carry % 10)
        carry = Math.floor(carry / 10)
        p = p.next
    }

    return dummy.next
};


