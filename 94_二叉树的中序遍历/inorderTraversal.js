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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // 递归
    // let res = []
    // function fn(root){
    //     // base case
    //     if(root == null) return
    //     fn(root.left)
    //     res.push(root.val)
    //     fn(root.right)
    // }
    // fn(root)
    // return res

    // 迭代
    let res = []
    let stack = []
    // cur为遍历二叉树的指针
    let cur = root
    while(cur || stack.length){
        // 如果当前节点不为null，就一直遍历左孩子压栈
        // 当遍历到最左边的左孩子，它的左孩子就是空了
        if(cur){
            stack.push(cur)
            cur = cur.left
        }else{
            // 栈的末尾就是最左孩子，以它为根节点当做一颗独立二叉树看
            // 它的左孩子是空不用push到res结果里面，或者说push了个空进去
            let node = stack.pop()
            // 左孩子(空)push后，push中，也就是自己
            res.push(node.val)
            // 再到右孩子，前面以root为根节点的左孩子都遍历完了
            // 但是以这个右孩子为根节点，就相当于一颗新二叉树了
            // 重复这个过程，遍历完它的所有左孩子压栈
            cur = node.right
        }
    }
    return res
};






