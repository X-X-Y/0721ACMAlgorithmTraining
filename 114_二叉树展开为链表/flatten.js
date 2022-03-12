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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root == null) return

    // 先将左边拉直，再将右边拉直
    flatten(root.left)
    flatten(root.right)

    // 记录当前右节点，左边接到右边，清空左节点
    let right = root.right
    root.right = root.left
    root.left = null

    // 将原来的右子树接到当前右子树后面
    let p = root
    while(p.right != null){
        p = p.right
    }
    p.right = right

    return root
};