// ============双链表============
// class Node{
//     constructor(val, prve=null, next=null){
//         this.val = val
//         this.prve = prve
//         this.next = next
//     }
// }

// var MyLinkedList = function() {
//     this._size = 0
//     this._head = null
// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//     if(index < 0 || index >= this._size) return -1
//     let count = 0
//     let cur = this._head
//     while(count++ < index){
//         cur = cur.next
//     }
//     return cur.val
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     let node = new Node(val)
//     if(this._size == 0){
//         this._head = node
//         this._size++
//         return
//     }
//     node.next = this._head
//     this._head = node
//     node.next.prve = node
//     this._size++
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     let node = new Node(val)
//     if(this._size == 0){
//         this._head = node
//     }else{
//         let cur = this._head
//         while(cur.next != null){
//             cur = cur.next
//         }
//         cur.next = node
//         node.prve = cur
//     }
//     this._size++
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     if(index <= 0){
//         this.addAtHead(val)
//         return
//     }else if(index > this._size){
//         return
//     }else if(index == this._size){
//         this.addAtTail(val)
//         return
//     }else{
//         let count = 0
//         let cur = this._head
//         let node = new Node(val)
//         while(count++ < index){
//             cur = cur.next
//         }
//         cur.prve.next = node
//         node.prve = cur.prve
//         cur.prve = node
//         node.next = cur
//         this._size++
//     }
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if(index < 0 || index >= this._size) return
//     if(this._size != 0 && index == 0){
//         // 删除头节点
//         this._head = this._head.next
//         this._size--
//         return
//     }

//     let count = 0
//     let cur = this._head
//     while(count++ < index){
//         cur = cur.next
//     }
//     cur.prve.next =  cur.next
//     if(cur.next){
//         // 防止当前节点是尾节点
//         cur.next.prve = cur.prve
//     }
//     this._size--
// };


// ===========单链表============
class Node{
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function() {
    this._size = 0
    this._head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1

    let count = 0
    let cur = this._head
    while(count++ < index){
        cur = cur.next
    }
    // 出循环后cur就指向了index位置节点
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val)
    node.next = this._head
    this._head = node
    this._size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this._size == 0){
        this.addAtHead(val)
        return
    }

    let node = new Node(val)
    let cur = this._head
    while(cur.next != null){
        cur = cur.next
    }
    // 出循环后，cur指向最后有一个节点
    cur.next = node
    this._size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0){
        this.addAtHead(val)
        return
    }else if(index > this._size){
        return
    }

    let node = new Node(val)
    let count = 0
    let cur = this._head
    while(count++ < index-1){
        cur = cur.next
    }
    // 出循环后cur指向index-1节点
    node.next = cur.next
    cur.next = node
    this._size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this._size) return

    if(index == 0 && this._size != 0){
        // 删除头节点
        this._head = this._head.next
        this._size--
        return
    }

    let count = 0
    let cur  = this._head
    while(count++ < index-1){
        cur = cur.next
    }
    cur.next = cur.next.next
    this._size--
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