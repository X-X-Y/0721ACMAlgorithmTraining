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
    // pre指当前翻转区域头节点的前一个节点
    pre = dummy
    // end指当前翻转区域的最后一个节点
    end = dummy

    // 每次进入循环时，end和pre一样都指向当前翻转区域首节点的前一个节点
    // 所以end.next是下一个待翻转的首节点，首节点为空，则不用翻转了
    while(end.next != null){
        // 首先把end节点指向待翻转区域的最后一个节点
        for(let i = 0; i < k && end != null; i++){
            end = end.next
        }
        // 说明这轮待翻转的链表长度已经不够k了
        if(end == null){
            break
        }
        let curend = end

        // 每次循环进来都要用下一个翻转区域首节点，所以在上一轮要准备好
        let nextstart = end.next
        // 切断当前翻转区域链表与后面的联系
        curend.next = null
        // 准备好当前翻转区域的首节点
        let curstart = pre.next
        // 翻转后获得翻转后链表的首节点，将其接到当前翻转区域的后面
        pre.next = reverse(curstart)
        // 翻转后原来的首节点就变成了现在的尾节点，同时也是下一个待翻转区域首节点的前一个节点
        pre = curstart
        // 翻转后的尾节点与下一个翻转区域首节点连接起来
        curstart.next = nextstart
        // 同时更新下一个翻转区域的尾节点与pre同指向
        end = curstart
    }

    return dummy.next
};

function reverse(head){
    pre = null
    cur = head
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}