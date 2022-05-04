/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // ====== 前序递归遍历 =======
    // let res = []
    // function func(root){
    //     if(root == null){
    //         res.push(null)
    //         return
    //     }
    //     res.push(root.val)
    //     func(root.left)
    //     func(root.right)
    // }
    // func(root)
    // return res.join()

    // ====== 后续递归遍历 =======
    let res = []
    function func(root){
        if(root == null){
            res.push(null)
            return null
        }
        func(root.left)
        func(root.right)
        res.push(root.val)
    }
    func(root)
    return res.join()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // ====== 前序递归遍历 =======
    // if(data.length == 0) return null
    // let nodelist = data.split(',')
    
    // function func(nodelist){
    //     let node = nodelist.shift()
    //     if(node == '') return null
    //     let root = new TreeNode(node)
    //     root.left = func(nodelist)
    //     root.right = func(nodelist)
    //     return root
    // }
    // return func(nodelist)

    // ====== 后续递归遍历 =======
    if(data.length == 0) return null
    let nodelist = data.split(',')

    function func(nodelist){
        let node = nodelist.pop()
        if(node == '') return null
        let root = new TreeNode(node)
        root.right = func(nodelist)
        root.left = func(nodelist)
        return root
    }

    return func(nodelist)
};

// console.log(deserialize(serialize(null)))

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */