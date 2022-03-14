/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length < 1) return null

    let index = 0
    let maxVal = nums[index]
    for(let i = 0; i < nums.length; i++){
        if(maxVal < nums[i]){
            maxVal = nums[i]
            index = i
        }
    }

    let root = new TreeNode(maxVal)
    root.left = constructMaximumBinaryTree(nums.slice(0, index))
    root.right = constructMaximumBinaryTree(nums.slice(index+1, nums.length))
    
    return root
};








