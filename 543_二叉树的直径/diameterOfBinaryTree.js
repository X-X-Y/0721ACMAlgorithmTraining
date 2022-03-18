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
var diameterOfBinaryTree = function(root) {
    let res = 0

    const maxDeep = (root) => {
        // 直径长度为左子树最大深度与右子树最大深度之和
        if(root == null) return 0

        let leftDeep = maxDeep(root.left)
        let rightDeep = maxDeep(root.right)
        curLen = leftDeep + rightDeep
        res = Math.max(res, curLen)

        return 1 + Math.max(leftDeep, rightDeep)
    }
    
    maxDeep(root)
    return res
};








