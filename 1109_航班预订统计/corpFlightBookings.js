/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
let diffFig = function(nums){
    this.nums = nums;
    let diff = new Array(this.nums.length).fill(0);
    if(diff.length > 0){
        diff[0] = this.nums[0];
        for(let i = 1; i < this.nums.length; i++){
            diff[i] = this.nums[i] - this.nums[i-1];
        }
    }
    this.diff = diff;
}
diffFig.prototype.increment = function(start, end, val){
    if(this.diff.length){
        this.diff[start] += val;
        if(end+1 < this.diff.length){
            this.diff[end+1] -= val;
        }
    }
}
diffFig.prototype.result = function(){
    if(this.diff.length){
        let res = new Array(this.diff.length).fill(0);
        res[0] = this.diff[0];
        for(let i = 1; i < res.length; i++){
            res[i] = res[i-1] + this.diff[i];
        }
        return res;
    }
}


var corpFlightBookings = function(bookings, n) {
    let df = new diffFig(new Array(n).fill(0));
    for(let i = 0; i < bookings.length; i++){
        df.increment(bookings[i][0]-1, bookings[i][1]-1, bookings[i][2]);
    }
    return df.result();
};


let test1 = [[1,2,10],[2,2,15]];
console.log(corpFlightBookings(test1, 2));




