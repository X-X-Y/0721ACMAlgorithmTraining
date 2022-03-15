/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length < 1) return null

    let rootVal = postorder[postorder.length-1]
    let rootInoIdx = 0
    for(let i = 0; i < inorder.length; i++){
        if(inorder[i] == rootVal){
            rootInoIdx = i
            break
        }
    }

    let leftInoArr = inorder.slice(0, rootInoIdx)
    let rightInoArr = inorder.slice(rootInoIdx+1, inorder.length)

    let leftPosArr = postorder.slice(0, rootInoIdx)
    let rightPosArr = postorder.slice(rootInoIdx, postorder.length-1)

    let root = new TreeNode(rootVal)
    root.left = buildTree(leftInoArr, leftPosArr)
    root.right = buildTree(rightInoArr, rightPosArr)

    return root
};



