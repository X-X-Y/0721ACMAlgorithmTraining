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
var reverseList = function(head) {
    // ====== 迭代 ======
    // let pre = null
    // let cur = head
    // let next
    // while(cur != null){
    //     next = cur.next
    //     cur.next = pre
    //     pre = cur
    //     cur = next
    // }
    // return pre

    // ====== 递归 ======
    // base case
    if(head === null || head.next === null){
        return head
    }
    let newhead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newhead
};






