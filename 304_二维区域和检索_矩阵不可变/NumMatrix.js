/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.preSum = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            this.preSum[i+1][j+1] = this.preSum[i][j+1] + this.preSum[i+1][j] + matrix[i][j] - this.preSum[i][j];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.preSum[row2+1][col2+1] - this.preSum[row2+1][col1] -this.preSum[row1][col2+1] + this.preSum[row1][col1];
};

let text1 = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
console.log(text1.sumRegion(0, 0, 1, 1));

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */