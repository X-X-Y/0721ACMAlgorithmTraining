/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
let diffCar = function(nums){
    this.nums = nums;
    let diff = new Array(this.nums.length).fill(0);
    diff[0] = this.nums[0];
    for(let i = 1; i < this.nums.length; i++){
        diff[i] = diff[i-1] + this.nums[i];
    }
    this.diff = diff;
}
diffCar.prototype.increment = function(start, end, val){
    this.diff[start] += val;
    if(end + 1 < this.diff.length){
        this.diff[end+1] -= val;
    }
}
diffCar.prototype.result = function(){
    let res = new Array(this.diff.length).fill(0);
    res[0] = this.diff[0];
    for(let i = 1; i < this.diff.length; i++){
        res[i] = res[i-1] + this.diff[i];
    }
    return res;
}

var carPooling = function(trips, capacity) {
    let end_posts = [];
    trips.forEach(item => {
        end_posts.push(item[2]);
    });
    let cnt = end_posts.reduce((num1, num2) => num1 > num2 ? num1 : num2);

    let df = new diffCar( new Array(cnt).fill(0) );
    for(let i = 0; i < trips.length; i++){
        // 到站就下车了，终点要减1
        df.increment(trips[i][1], trips[i][2]-1, trips[i][0]);
    }

    if( Math.max(...df.result()) <= capacity ){
        return true;
    }
    return false;
};


// let test1 = [[9,0,1],[3,3,7]];
// console.log(carPooling(test1, 4));
// let test2 = [[3,2,7],[3,7,9],[8,3,9]];
// console.log(carPooling(test2, 11));





