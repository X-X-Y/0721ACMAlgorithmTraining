/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.preSum = [0];
    for(let i = 0; i < nums.length; i++){
        this.preSum.push(this.preSum[i] + nums[i]);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.preSum[right+1] - this.preSum[left];
};


let test1 = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(test1.sumRange(0, 2));



/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */