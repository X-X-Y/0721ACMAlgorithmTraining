/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 目标值存在标签
    let flag = false;
    let left1 = 0;
    let right1 = nums.length - 1;

    // 开始位置
    while(left1 <= right1){
        let mid = Math.floor(left1 + (right1 - left1) / 2);
        if(nums[mid] == target){
            right1 = mid - 1;
            flag = true;
        }else if(nums[mid] > target){
            right1 = mid - 1;
        }else if(nums[mid] < target){
            left1 = mid + 1;
        }
    }
    if(!flag){
        return [-1, -1];
    }

    let left2 = 0;
    let right2 = nums.length - 1;
    // 结束位置
    while(left2 <= right2){
        let mid = Math.floor(left2 + (right2 - left2) / 2);
        if(nums[mid] == target){
            left2 = mid + 1;
        }else if(nums[mid] > target){
            right2 = mid - 1;
        }else if(nums[mid] < target){
            left2 = mid + 1;
        }
    }

    return [left1, left2-1];
};


let test1 = [5,7,7,8,8,10];
console.log(searchRange(test1, 110));


