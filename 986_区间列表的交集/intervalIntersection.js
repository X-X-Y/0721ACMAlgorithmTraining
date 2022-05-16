/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let res = []
    let i = 0
    let j = 0

    while(i < firstList.length && j < secondList.length){
        let a1 = firstList[i][0]; let a2 = firstList[i][1]
        let b1 = secondList[j][0]; let b2 = secondList[j][1]
        // 如果有交集区域[c1, c2]，可分为四种情况，概括为
        // c1=max(a1, b1)，c2=min(a2, b2)
        if(b1 <= a2 && b2 >= a1){
            res.push([Math.max(a1, b1), Math.min(a2, b2)])
        }
        // 如果有交集，则b2 < a2说明第二区间小应该往后移
        // 而b2 > a2说明第一区间小应该往后移
        // 如果没有交集，b2 < a2则b2也一定小于a1，说明第二区间小应该往后移
        // 而b2 > a2则b1也一定大于a2，说明第一区间小应该往后移
        if(b2 < a2){
            j++
        }else{
            i++
        }
    }

    return res
};