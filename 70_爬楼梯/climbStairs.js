/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // ======= 回溯 通过21/45 超出时间限制 =======
    // let res = 0
    // let cur = 0  // 当前在第几级台阶
    // function backtrack(n, cur){
    //     if(cur > n) return
    //     if(cur == n){
    //         res++
    //         return
    //     }

    //     for(let i = 1; i <= 2; i++){
    //         cur += i
    //         backtrack(n, cur)
    //         cur -= i
    //     }
    // }
    // backtrack(n, cur)
    // return res

    // ======== 动规 ========
    if(n == 1 || n == 2){
        return n
    }
    // dp[i] 到第 i 阶楼梯有 dp[i] 种方法
    // let dp = new Array(n).fill(0)
    // dp[0] = 1; dp[1] = 2
    let pre1 = 1; let pre2 = 2; let cur = 0
    for(let i = 2; i < n; i++){
        // dp[i] = dp[i-1] + dp[i-2]
        cur = pre1 + pre2
        pre1 = pre2
        pre2 = cur
    }
    // return dp[n-1]
    return cur
};











