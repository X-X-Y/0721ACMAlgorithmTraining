/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0] == b[0]){
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })

    let res = []
    let left = intervals[0][0]
    let right = intervals[0][1]
    for(let i = 0; i < intervals.length; i++){
        if(intervals[i][1] > right && intervals[i][0] <= right){
            right = intervals[i][1]
        }
        if(intervals[i][0] > right){
            res.push([left, right])
            left = intervals[i][0]
            right = intervals[i][1]
        }
    }
    // 最后一次更新的left和right还没来得及添加，i就走到头了
    res.push([left, right])

    return res
};

console.log(merge([[1,4],[4,5]]))