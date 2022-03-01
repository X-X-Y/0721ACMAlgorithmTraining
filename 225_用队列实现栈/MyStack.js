var MyStack = function() {
    this.s1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for(let i = 1; i < this.s1.length; i++){
        this.s1.push(this.s1[0]);
        this.s1.shift();
    }
    let val = this.s1[0];
    this.s1.shift();
    return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    for(let i = 1; i < this.s1.length; i++){
        this.s1.push(this.s1[0]);
        this.s1.shift();
    }
    let val = this.s1[0];
    this.s1.shift();
    this.push(val);
    return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.s1.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */