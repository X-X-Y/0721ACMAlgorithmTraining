/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let queue = []
    if(root == null){
        return root
    }
    queue.push(root)
    while(queue.length){
        let n = queue.length
        let p = queue[0]
        for(let i = 0; i < n; i++){
            let cur = queue.shift()
            if(cur.left != null){
                queue.push(cur.left)
            }
            if(cur.right != null){
                queue.push(cur.right)
            }
            if(i != 0){
                p.next = cur
                p = cur
            }
        }
    }
    return root
};