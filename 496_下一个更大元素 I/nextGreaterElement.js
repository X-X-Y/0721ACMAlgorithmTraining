/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let s = []  // 单调减栈，从后往前存储num2的最大值
    let res1 = []
    let res2 = new Array(nums2.length, 0)
    for(let i = nums2.length-1; i >= 0; i--){
        while(s.length > 0 && s[s.length-1] < nums2[i]){
            s.pop()
        }
        res2[i] = s.length > 0 ? s[s.length-1] : -1
        s.push(nums2[i])
    }
    nums1.forEach(item => {
        res1.push(res2[nums2.indexOf(item)])
    })
    return res1
};


// console.log(nextGreaterElement([2,4], [1,2,3,4]))


