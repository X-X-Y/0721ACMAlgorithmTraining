/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MonotonousQueue{
    constructor(){
        this.q = []
    }

    addLast(n){
        while(this.q.length > 0 && this.q[this.q.length-1] < n){
            this.q.pop()
        }
        this.q.push(n)
    }

    gatMax(){
        return this.q[0]
    }

    // 删除窗口本来的第一个数
    popFirst(n){
        // 如果它不在第一个，说明已经被入列的数给挤出去了，就不用删了
        if(n == this.q[0]){
            this.q.shift()
        }
    }
}

var maxSlidingWindow = function(nums, k) {
    let res = []
    let win = new MonotonousQueue()
    for(let i = 0; i < nums.length; i++){
        if(i < k-1){
            win.addLast(nums[i])
        }else{
            // 窗口向前滑动
            win.addLast(nums[i])
            // 记录当前窗口最大值
            res.push(win.gatMax())
            // 移出窗口原本的第一个数字
            win.popFirst(nums[i-k+1])
        }
    }
    return res
};







