/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     if(p == null && q == null){
//         // 表明遍历到最尾子节点了，后面都没有孩子节点
//         return true
//     }else if(p == null || q == null){
//         // 只有有一个为null，不然到不了这一步
//         return false
//     }else if(p.val != q.val){
//         // 到这一步说明两个都不为null，都有val值
//         return false
//     }

//     // 到这里说明两个节点都有值且相等，那么递归遍历孩子节点是否相等
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// };

// ====================== 练习一下前中后序遍历 ======================
// var isSameTree = function(p, q) {
//     // ============ 前序遍历 - 递归 ============
//     // let pres = []; let qres = [];
//     // function fn(root, res){
//     //     if(root == null){
//     //         res.push(null)
//     //         return
//     //     }
//     //     res.push(root.val)
//     //     fn(root.left, res)
//     //     fn(root.right, res)
//     // }
//     // fn(p, pres); fn(q, qres)

//     // ============ 前序遍历 - 迭代 ============
//     // let pres = []; let qres = [];
//     // function pre(root, res){
//     //     let stack = []
//     //     stack.push(root)
//     //     while(stack.length){
//     //         let node = stack.pop()
//     //         if(node == null){
//     //             res.push(null)
//     //             continue
//     //         }
//     //         res.push(node.val)
//     //         stack.push(node.right)
//     //         stack.push(node.left)
//     //     }
//     // }
//     // pre(p, pres); pre(q, qres)
    
//     // ------ 判断两个前序遍历数组是否完全相等 ------
//     if(pres.length == qres.length){
//         for(let i = 0; i < pres.length; i++){
//             if(pres[i] != qres[i]) return false
//         }
//         return true
//     }
//     return false
// };

// var isSameTree = function(p, q) {
//     // ============ 中序遍历 - 递归 ============
//     // [1,1] 和 [1,null,1] 包含null的话，中序遍历结果相同
//     // 58 / 60 故不能全部通过
//     // let pres = []; let qres = [];
//     // function inorder(root, res){
//     //     if(root == null){
//     //         res.push(null)
//     //         return
//     //     }
//     //     inorder(root.left, res)
//     //     res.push(root.val)
//     //     inorder(root.right, res)
//     // }
//     // inorder(p, pres); inorder(q, qres)
    

//     // ============ 中序遍历 - 迭代 ============
//     // [1,1] 和 [1,null,1] 同上面递归的情况
//     // let pres = []; let qres = [];
//     // function inorder(root, res){
//     //     let stack = []
//     //     let cur = root
//     //     while(cur || stack.length){
//     //         if(cur){
//     //             stack.push(cur)
//     //             cur = cur.left
//     //         }else{
//     //             res.push(null)
//     //             let node = stack.pop()
//     //             res.push(node.val)
//     //             cur = node.right
//     //         }
//     //     }
//     // }
//     // inorder(p, pres); inorder(q, qres)
    
//     // ------ 判断两个前序遍历数组是否完全相等 ------
//     if(pres.length == qres.length){
//         for(let i = 0; i < pres.length; i++){
//             if(pres[i] != qres[i]) return false
//         }
//         return true
//     }
//     return false
// };

var isSameTree = function(p, q) {
    // ============ 后序遍历 - 递归 ============
    // let pres = []; let qres = [];
    // function pos(root, res){
    //     if(root == null){
    //         res.push(null)
    //         return
    //     }
    //     res.push(root.val)
    //     pos(root.right, res)
    //     pos(root.left, res)
    // }
    // pos(p, pres); pos(q, qres)
    // pres = pres.reverse(); qres = qres.reverse()
    

    // ============ 后序遍历 - 迭代 ============
    let pres = []; let qres = [];
    let stack = []
    function pos(root, res){
        stack.push(root)
        while(stack.length){
            let node = stack.pop()
            if(node == null){
                res.push(null)
                continue
            }
            res.push(node.val)
            stack.push(node.right)
            stack.push(node.left)
        }
    }
    pos(p, pres); pos(q, qres)
    pres = pres.reverse()
    qres = qres.reverse()
    
    // ------ 判断两个前序遍历数组是否完全相等 ------
    if(pres.length == qres.length){
        for(let i = 0; i < pres.length; i++){
            if(pres[i] != qres[i]) return false
        }
        return true
    }
    return false
};

let node1 = new TreeNode(1)
node1.left = new TreeNode(1)
let node2 = new TreeNode(1)
node2.right = new TreeNode(1)
console.log( isSameTree(node1, node2) )








