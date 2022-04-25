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
 * @return {number}
 */
var minDepth = function(root) {
    let res = 0
    if(root == null){
        return res
    }

    // 层序遍历，每层res++，当遇到子叶结点的两个孩子都为null返回
    let queue = []
    queue.push(root)
    while(queue.length){
        let cursize = queue.length
        res++
        for(let i = 0; i < cursize; i++){
            let node = queue.shift()
            if(node.left == null && node.right == null){
                return res
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    return res
};





