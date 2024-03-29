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
var maxDepth = function (root) {
  // ====== 回溯 ======
  // let res = 0
  // let depth = 0

  // function traverse(root){
  //     if(root == null){
  //         return
  //     }

  //     depth++
  //     res = Math.max(res, depth)
  //     traverse(root.left)
  //     traverse(root.right)
  //     depth--
  // }

  // traverse(root)
  // return res

  // ====== 动规 ======
  // function curMaxDepth(root){
  //     if(root == null){
  //         return 0
  //     }

  //     let left = curMaxDepth(root.left)
  //     let right = curMaxDepth(root.right)

  //     return 1 + Math.max(left, right)
  // }

  // return curMaxDepth(root)

  // ====== bfs ======
  // let queue = []
  // let res = []
  // if(!root){
  //     return res
  // }

  // queue.push(root)
  // let curDeep = 0
  // while(queue.length){
  //     curDeep++
  //     let curLen = queue.length
  //     for(let i = 0; i < curLen; i++){
  //         let curNode = queue.shift()
  //         if(curNode.left){
  //             queue.push(curNode.left)
  //         }
  //         if(curNode.right){
  //             queue.push(curNode.right)
  //         }
  //     }
  // }
  // return curDeep

  // ====== dfs ======
  let res = [];
  let path = [];
  if (!root) {
    return 0;
  }
  path.push(root);
  function backtrack(n) {
    if (!path[path.length - 1]) {
      res.push(path.length - 1);
      return;
    }
    for (let item of [n.left, n.right]) {
      path.push(item);
      backtrack(item);
      path.pop();
    }
  }
  backtrack(root);
  return Math.max(...res);
};
