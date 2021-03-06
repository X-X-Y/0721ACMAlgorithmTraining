/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let connect = null;
var reverseRight = function(head, right) {
    // 反转前right个元素
    if( right == 1){
        // 全部反转后新的尾部指向的下一个节点
        connect = head.next;
        return head;
    }
    let newHead = reverseRight(head.next, right-1);
    head.next.next = head;
    head.next = connect;
    return newHead;
};

var reverseBetween = function(head, left, right) {
    // 递归
    // if(left == 1){
    //     return reverseRight(head, right);
    // }
    // // head.next开始的链表前right项全部反转完
    // head.next = reverseBetween(head.next, left-1, right-1);
    // return head;

    // 迭代
    let newHead = new ListNode(0, head);
    let pre = newHead;

    // 找到第left-1个节点
    for(let i = 1; i < left; i++){
        pre = pre.next;
    }
    let cur = pre.next;
    
    while(left < right){
        let next = cur.next;
        cur.next = cur.next.next;
        next.next = pre.next;
        pre.next = next;
        left++;
    }
    return newHead.next;
};







