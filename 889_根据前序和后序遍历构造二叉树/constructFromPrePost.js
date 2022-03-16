/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    if(preorder.length < 1) return null
    if(preorder.length == 1) return new TreeNode(preorder[0])

    let rootVal = preorder[0]
    let rootLeftVal = preorder[1]
    let rootLeftIdx = 0

    for(let i = 0; i < postorder.length; i++){
        if(postorder[i] == rootLeftVal){
            rootLeftIdx = i
            break
        }
    }

    let preLeftArr = preorder.slice(1, rootLeftIdx+2)
    let preRightArr = preorder.slice(rootLeftIdx+2, preorder.length)

    let root = new TreeNode(rootVal)
    
    let posLeftArr = postorder.slice(0, rootLeftIdx+1)
    let posRightArr = postorder.slice(rootLeftIdx+1, postorder.length-1)

    root.left = constructFromPrePost(preLeftArr, posLeftArr)
    root.right = constructFromPrePost(preRightArr, posRightArr)
    return root
};






