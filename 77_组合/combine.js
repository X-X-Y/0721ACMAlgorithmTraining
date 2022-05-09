/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    let path = []

    function backtrack(n, k, start, path){
        if(path.length == k){
            res.push([...path])
            return
        }
		// 组合不需要used数组，因为每次从start开始而不是从头开始
		// 所以在同一条路径上，后面的选择不存在与前面重复
        for(let i = start; i <= n; i++){
            path.push(i)
            backtrack(n, k, i+1, path)
            path.pop()
        }
    }

    backtrack(n, k, 1, path)
    return res
};