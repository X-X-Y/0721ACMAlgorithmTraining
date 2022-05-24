/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    // 所有边界陆地都不符合要求，即求封闭陆地的面积
    let m = grid.length;
    let n = grid[0].length;

    // 若第i行第j列为陆地，则淹了这片陆地
    function dfs(i, j){
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0){
            return
        }
        grid[i][j] = 0
        dfs(i-1, j)
        dfs(i+1, j)
        dfs(i, j-1)
        dfs(i, j+1)
    }

    // 首先将边界陆地淹了
    for(let i = 0; i < m; i++){
        dfs(i, 0)
        dfs(i, n-1)
    }
    for(let j = 0; j < n; j++){
        dfs(0, j)
        dfs(m-1, j)
    }

    let res = 0
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                res++
            }
        }
    }

    return res
};

// console.log(numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]))