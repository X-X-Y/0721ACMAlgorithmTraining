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
    // 当其中一个为0，相当于是个空字符串，什么长度的字符串变成空都要其长度次数操作
    // 也即相当于，其中某个字符串已经比较完了，剩下保持相同需要操作剩下长度的次数
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
                dp[i][j] = Math.min(
                    // 插入一个数跟j位置匹配了，那么要保证[i, j-1]相同，因为插入已经
                    // 跟j相同了，那么[i, j]就是相同了，下次从[i+1, j+1]开始比较
                    dp[i][j-1]+1, 
                    // 第i位置删掉，就要保证[i-1, j]相同，因为i已经没了，就相当于说
                    // i+1之前都跟j相同了，下次可以从[i+1, j+1]开始比较
                    dp[i-1][j]+1, 
                    // 第i位置换掉，要保证[i-1, j-1]相同，因为换掉后，i, j位置已经相
                    // 同了，下次可以从[i+1, j+1]开始比较
                    dp[i-1][j-1]+1)
            }
        }
    }

    return dp[m][n]
};

// console.log(minDistance("intention", "execution"))