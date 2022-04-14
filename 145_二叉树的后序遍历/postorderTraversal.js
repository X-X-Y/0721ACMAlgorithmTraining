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
var postorderTraversal = function(root) {
    // 迭代
    // let stack = []
    // let res = []
    // stack.push(root)
    // while(stack.length){
    //     let node = stack.pop()
    //     if(node == null) continue
    //     // 从头开始遍历,所以一开始头(中)已经被加进去了
    //     res.push(node.val)
    //     // 先入后出，这样顺序将是中右左
    //     stack.push(node.left)
    //     stack.push(node.right)
    // }
    // // 反过来就是左右中了
    // return res.reverse()

    // 递归
    let res = []
    function fn(root){
        if(root == null) return
        fn(root.left)
        fn(root.right)
        res.push(root.val)
    }
    fn(root)
    return res
};






