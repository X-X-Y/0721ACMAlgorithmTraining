/**
 * @param {number[][]} matrix
 * @return {number}
 */
//  下降到某个坐标(m,n)点的最小路径
let cache

var minFallingPathSum = function(matrix) {
    let n = matrix.length
    let res = 99999
    cache = new Array(n).fill(0).map(() => new Array(n).fill(23333))

    for(let j = 0; j < n; j++){
        res = Math.min(res, dp(matrix, n-1, j))
    }
    
    return res
};

function dp(matrix, i, j){
    // 这里的越界处理主要是为了后面的状态转移准备的
    if(i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length){
        return 66666
    }

    // base case
    if(i == 0){
        return matrix[0][j]
    }

    // 查找缓存坐标(i,j)的最小路径是否计算过了
    if(cache[i][j] != 23333){
        return cache[i][j]
    }

    // 进行状态转移
    cache[i][j] = matrix[i][j] + Math.min(dp(matrix, i-1, j), dp(matrix, i-1, j-1), dp(matrix, i-1, j+1))

    return cache[i][j]
}

// console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]))


