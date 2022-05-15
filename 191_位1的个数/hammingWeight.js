/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // n&(n-1)消除二进制表示中的最后一个1
    let res = 0
    while(n != 0){
        res++
        n = n&(n-1)
    }
    return res
};