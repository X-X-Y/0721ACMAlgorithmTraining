/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  =========冒泡
// var sortArray = function(nums) {
//     for(let i = nums.length; i > 1 ; i--){
//         let count = 0;
//         for(let j = 0; j < i-1; j++){
//             if(nums[j] > nums[j+1]){
//                 count++;
//                 tem = nums[j];
//                 nums[j] = nums[j+1];
//                 nums[j+1] = tem;
//             }
//         }
//         if(0 == count){
//             return nums;
//         }
//     }
//     return nums;
// };

//  =========快排
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums;
    }

    let left = [];
    let right = [];
    let mid = nums.splice(Math.floor(nums.length/2), 1)[0];
    for(let i = 0; i < nums.length; i++){
        if(mid > nums[i]){
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }
    return sortArray(left).concat(mid, sortArray(right));
};

// let test1 = [5,1,1,2,0,0];
// console.log(sortArray(test1));



