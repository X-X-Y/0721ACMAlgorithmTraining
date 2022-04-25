/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = []
    if(root == null){
        return res
    }
    let queue = []
    queue.push(root)
    while(queue.length){
        let cur = []
        let cursize = queue.length
        for(let i = 0; i < cursize; i++){
            let node = queue.shift()
            cur.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        res.unshift(cur)
    }
    return res
};