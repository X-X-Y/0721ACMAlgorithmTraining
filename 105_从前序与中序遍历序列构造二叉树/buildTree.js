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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length < 1) return null

    // 找到中序遍历根节点的位置rootIdx
    let rootVal = preorder[0]
    let rootIdx = 0
    for(let i = 0; i < inorder.length; i++){
        if(inorder[i] == rootVal){
            rootIdx = i
            break
        }
    }

    // 根据rootIdx划分出root左右子树的中序遍历
    let leftIno = inorder.slice(0, rootIdx)
    let rightIno = inorder.slice(rootIdx+1, inorder.length)
    // 根据root左子树的长度确定先序遍历左子树的最后一个数位置leftPreEnd
    // let leftPreEnd = 0
    // for(let i = 1; i < preorder.length; i++){
    //     if(preorder[i] == leftIno[leftIno.length-1]){
    //         leftPreEnd = i
    //         break
    //     }
    // }
    let leftPreEnd = leftIno.length

    // 根据leftPreEnd划分出root左右子树的先序遍历
    let leftPre = preorder.slice(1, leftPreEnd+1)
    let rightPre = preorder.slice(leftPreEnd+1, preorder.length)

    // 有了root左右子树的先序和后序遍历，开始递归
    let root = new TreeNode(rootVal)
    root.left = buildTree(leftPre, leftIno)
    root.right = buildTree(rightPre, rightIno)

    return root
};





