/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let numstr = num.toString()
    // dp[i] 以位置i结尾有dp[i]种翻译方法
    let dp = new Array(numstr.length).fill(0)
    // base case
    dp[0] = 1
    if(numstr[0] != '0' && numstr.length >= 2 && Number(numstr.substr(0, 2)) <= 25){
        dp[1] = 2
    }else{
        dp[1] = 1
    }
    for(let i = 2; i < numstr.length; i++){
        if(numstr[i-1] <= 2 && numstr[i-1] > 0 && Number(numstr.substr(i-1, 2)) <= 25){
            dp[i] = dp[i-1] + dp[i-2]
        }else{
            dp[i] = dp[i-1]
        }
    }
    return dp[numstr.length-1]
};

// console.log(translateNum(12258))