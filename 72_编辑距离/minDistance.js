/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// var minDistance = function(word1, word2) {
//     // word1 长度m  word2 长度 n
//     // dp(i, j)  word1位置i编辑到word2位置j需要的最小操作数
//     let m = word1.length
//     let n = word2.length
//     let cache = new Array(m).fill(-1).map(()=>new Array(n).fill(-1))

//     function dp(i, j){
//         // base case
//         if(i == -1) return j+1
//         if(j == -1) return i+1

//         if(cache[i][j] != -1){
//             return cache[[i]][j]
//         }

//         if(word1[i] == word2[j]){
//             cache[i][j] = dp(i-1, j-1)
//             // return dp(i-1, j-1)
//         }else{
//             cache[i][j] = Math.min(dp(i, j-1)+1, dp(i-1, j)+1, dp(i-1, j-1)+1)
//             // return Math.min(dp(i, j-1)+1, dp(i-1, j)+1, dp(i-1, j-1)+1)
//         }

//         return cache[i][j]
//     }

//     return dp(m-1, n-1)
// };

var minDistance = function(word1, word2) {
    // word1 长度m  word2 长度 n
    // dp[i, j]  word1位置i编辑到word2位置j需要的最小操作数
    let m = word1.length
    let n = word2.length

    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
    // base case
    // 备忘录时 i j == -1，但是数组下标最小为0，于是定义了m+1,n+1的dp数组
    // i和j都往后移了1
    for(let i = 1; i <= m; i++){
        // 当j==0时，返回i
        dp[i][0] = i
    }
    for(let j = 1; j <= n; j++){
        // 当i==0时，返回j
        dp[0][j] = j
    }

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(word1[i-1] == word2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1]+1)
            }
        }
    }

    return dp[m][n]
};

console.log(minDistance("intention", "execution"))






