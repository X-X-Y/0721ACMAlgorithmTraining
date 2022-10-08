/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length
    let n = dungeon[0].length
    // dp[i] 从第i行第j列到右下角所需最少健康点，i、j从0开始
    let dp = new Array(m).fill(0).map(()=>new Array(n).fill(0))

    // base case
    dp[m-1][n-1] = dungeon[m-1][n-1] >= 0 ? 1 : -dungeon[m-1][n-1] + 1
    // for(let i = m-2; i >= 0; i--){
    //     let need = dp[i+1][n-1] - dungeon[i][n-1]
    //     dp[i][n-1] = need > 0 ? need : 1
    // }
    // for(let j = n-2; j >= 0; j--){
    //     let need = dp[m-1][j+1] - dungeon[m-1][j]
    //     dp[m-1][j] = need > 0 ? need : 1
    // }

    for(let i = m-1; i >= 0; i--){
        for(let j = n-1; j >= 0; j--){
            let need
            // 最后一行
            if(i === m-1 && j !== n-1){
                need = dp[i][j+1] - dungeon[i][j]
            // 最后一列
            }else if(j === n-1 && i !== m-1){
                need = dp[i+1][j] - dungeon[i][j]
            }else if(j !== n-1 && i !== m-1){
                need = Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j]
            // 右下角已经初始化过了，或者也可以在这里初始化
            }else{
                continue
            }
            dp[i][j] = need > 0 ? need : 1
        }
    }

    return dp[0][0]
};