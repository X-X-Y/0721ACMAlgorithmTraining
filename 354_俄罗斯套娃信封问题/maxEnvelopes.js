/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// 通过 85/87 超时
var maxEnvelopes = function(envelopes) {
    // 宽度不同以宽度进行升序排列，宽度相同以高度进行降序排列
    // 前者确保后面的信封宽度都比前面的大，后者确保相同宽度信封不会被装下
    let newEnvelopes = envelopes.sort((a, b)=>{
        return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
    })

    let heights = []
    for(let i = 0; i < newEnvelopes.length; i++){
        heights.push(newEnvelopes[i][1])
    }

    // dp[i] 以第i个位置为结尾，最长子序列的长度
    let dp = new Array(heights.length).fill(1)
    for(let i = 0; i < heights.length; i++){
        for(let j = 0; j < i; j++){
            if(heights[i] > heights[j]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }

    return Math.max(...dp)
};

// console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))