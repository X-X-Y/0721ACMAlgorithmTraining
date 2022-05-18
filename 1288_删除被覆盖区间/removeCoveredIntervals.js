/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0] == b[0]){
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })

    let left = intervals[0][0]
    let right = intervals[0][1]
    let res = 0
    for(let i = 1; i < intervals.length; i++){
        // 后面区间被当前区间包含，结果加1，当前区间范围维持不变
        if(left <= intervals[i][0] && right >= intervals[i][1]){
            res++
        }
        // 后面区间的尾部超出了当前区间，即有交集，更新区间范围，这里感觉题目表达有歧义
        // 题目想表达的应该是，可以合并重叠区间，最后得到的区间都是不相交的
        if(right >= intervals[i][0] && right <= intervals[i][1]){
            right = intervals[i][1]
        }
        // 后面区间与当前区间完成独立
        if(right < intervals[i][0]){
            left = intervals[i][0]
            right = intervals[i][1]
        }
    }

    return intervals.length - res
};