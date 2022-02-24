/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head;
    let p1 = head;
    let p2 = head;

    for(let i = 0; i < n; i++){
        p1 = p1.next;
    }
    // 避免n与链表等长的特殊情况
    if(p1 == null){
        return p.next;
    }
    while(p1.next != null){
        p1 = p1.next;
        p2 = p2.next;
    }
    p2.next = p2.next.next;
    return p;
};



