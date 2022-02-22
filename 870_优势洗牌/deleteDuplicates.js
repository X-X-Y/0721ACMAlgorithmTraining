/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    let n = nums1.length;
    let res = new Array(n).fill(0);
    let sortB = nums2.map((item, i) => [item, i]).sort((a, b) => a[0] - b[0]);

    let sortA = nums1.sort((a, b)=>a - b);

    let left = 0;
    let right = n - 1;
    for(let i = n-1; i >= 0; i--){
        let idx = sortB[i][1];
        let curMax = sortB[i][0];
        if(sortA[right] > curMax){
            res[idx] = sortA[right];
            right--;
        }else{
            res[idx] = sortA[left];
            left++;
        }
    }
    return res;
};


// let testA = [12,24,8,32];
// let testB = [13,25,32,11];
// console.log(advantageCount(testA, testB));



