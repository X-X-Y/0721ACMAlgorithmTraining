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

        for(let i = start; i <= n; i++){
            path.push(i)
            backtrack(n, k, i+1, path)
            path.pop()
        }
    }

    backtrack(n, k, 1, path)
    return res
};