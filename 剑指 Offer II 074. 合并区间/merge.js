/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = []
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    res.push(intervals[0])
    for(let i = 1; i < intervals.length; i++){
        // 如果后面的区间开始数落在最近的一个独立区间上
        if(intervals[i][0] <= res[res.length-1][1]){
            // 将当前区间合并到最近的那个独立区间里面
            // 如果当前区间的结尾数比最近独立区间结尾数大才换
            if(intervals[i][1] > res[res.length-1][1]){
                res[res.length-1][1] = intervals[i][1]
            }
        }else{
            // 当前区间与最近的独立区间不重合，将其作为新的独立区间存入结果
            res.push(intervals[i])
        }
    }
    return res
};

// console.log(merge([[1,4],[2,3]]))