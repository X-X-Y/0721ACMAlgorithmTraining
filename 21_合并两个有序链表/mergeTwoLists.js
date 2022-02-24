/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let p = new ListNode(0);
    let p0 = p;
    let p1 = list1;
    let p2 = list2;

    while(p1 != null && p2 != null){
        if(p1.val >= p2.val){
            p0.next = p2;
            p2 = p2.next;
        }else if(p1.val < p2.val){
            p0.next = p1;
            p1 = p1.next;
        }
        p0 = p0.next;
    }

    if(p1 != null){
        p0.next = p1;
    }
    if(p2 != null){
        p0.next = p2;
    }
    return p.next;
};









