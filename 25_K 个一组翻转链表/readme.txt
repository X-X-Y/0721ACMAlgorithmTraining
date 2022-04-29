/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(head == null || head.next == null){
        return head
    }

    let dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy  // pre 指向待翻转区域的第一个节点的前一个节点
    let end = dummy  // end 指向待翻转区域的最后一个节点

    while(end.next != null){
        // 将end移到待翻转区域的最后一个节点
        for(let i = 0; i < k && end != null; i++){
            end = end.next
        }
        // 如果当前要执行翻转的区域长度小于k，则不执行翻转
        if(end == null){
            break
        }
        // 记录下一个翻转区域的第一个节点，方便当前翻转后与后面的拼接
        let nextFirst = end.next
        // 记录当前翻转区域的第一个节点
        let startCur = pre.next
        // 将当前待翻转区域的最后一个节点与后面断开，这样当前待翻转的区域就形成
        // 了一个独立的链表
        end.next = null
        // 对待翻转的独立链表进行翻转，并拼接到原第一个节点的前一个节点
        // 即当前翻转区域的前面部分的最后一个节点
        pre.next = reverse(startCur)
        // 当前区域翻转完成后，与后面的部分拼接上
        // 因为经过翻转原来的第一个节点就变成了最后一个
        startCur.next = nextFirst
        // pre 指向下一个待修改区域的第一个节点的前一个节点，即startCur
        pre = startCur
        // end 指向与 pre 同指向，因为进入循环首先就是将end移到下一个
        // 待翻转区域的最后一个节点
        end = startCur
    }

    return dummy.next
};

// 翻转以head为头节点的整条链表
function reverse(head){
    let pre = null
    let cur = head
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}






