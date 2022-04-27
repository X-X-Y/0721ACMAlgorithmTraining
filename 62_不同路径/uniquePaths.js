/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // dp[i][j] 到第i行第j列有几种方法
    let dp = new Array(m).fill(new Array(n).fill(0))
    for(let i = 0; i < m; i++){
        dp[i][0] = 1
    }
    for(let i = 0; i < n; i++){
        dp[0][i] = 1
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1]
};

// console.log(uniquePaths(7, 3))
// console.log(uniquePaths(3, 2))
// console.log(uniquePaths(3, 3))
