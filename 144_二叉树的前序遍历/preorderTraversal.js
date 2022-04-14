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
var preorderTraversal = function(root) {
    // 迭代
    // let stack = []
    // let res = []
    // stack.push(root)
    // while(stack.length){
    //     let node = stack.pop()
    //     if(node == null) continue
    //     res.push(node.val)  // 中
    //     // 栈先入后出
    //     stack.push(node.right)
    //     stack.push(node.left)
    // }
    // return res

    // 递归
    let res = []
    function fn(root){
        if(root == null) return
        res.push(root.val)
        fn(root.left)
        fn(root.right)
    }
    fn(root)
    return res
};


