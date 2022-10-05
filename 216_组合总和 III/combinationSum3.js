/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let path = []
    let res = []

    function backtrack(n, k, start){
        if(path.length === k && path.reduce((a, b) => a + b) === n){
            res.push([...path])
            return
        }

        for(let i = start; i < 10; i++){
            path.push(i)
            backtrack(n, k, i+1)
            path.pop()
        }
    }

    backtrack(n, k, 1)
    return res
};