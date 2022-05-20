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
var countNodes = function(root) {
    let l = root
    let r = root
    // 节点个数等于左子树的节点数+右子树的节点数
    let hleft = 0
    let hright = 0
    while(l != null){
        l = l.left
        hleft++
    }
    while(r != null){
        r = r.right
        hright++
    }
    // 满二叉树
    if(hleft == hright){
        return Math.pow(2, hleft) - 1
    }
    // 普通完全二叉树
    return 1 + countNodes(root.left) + countNodes(root.right)
};