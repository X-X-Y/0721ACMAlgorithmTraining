/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 如果一个数是2的指数，那么它的二进制表示只会含有一个1
    if(n <= 0) return false
    // 使用n&(n-1)来去除n的二进制最后一个1
    return (n&(n-1)) == 0
};