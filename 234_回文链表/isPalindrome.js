/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }
    // 节点数为奇数时，slow指针落在中间，需要后移一位
    if(fast != null) slow = slow.next

    let left = head
    let right = reverse(slow)
    while(right != null){
        if(left.val != right.val){
            return false
        }
        left = left.next
        right = right.next
    }
    return true
};

function reverse(head){
    let pre = null
    let cur = head
    let next
    while(cur != null){
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

let node1 = new ListNode(1)
node1.next = new ListNode(2, null)
console.log(isPalindrome(node1))

