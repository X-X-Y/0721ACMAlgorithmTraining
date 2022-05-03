/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length; let n = grid[0].length;
    let res = 0
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                res = Math.max(res, dfs(grid, i, j))
            }
        }
    }

    // 从(i, j)开始，将自身和周围的陆地淹没，并返回该片陆地面积
    function dfs(grid, i, j){
        if(i < 0 || j < 0 || i >= m || j >=n){
            return 0
        }
        if(grid[i][j] == 0){
            return 0
        }

        grid[i][j] = 0
        return dfs(grid, i-1, j)
             + dfs(grid, i, j-1) 
             + dfs(grid, i+1, j)
             + dfs(grid, i, j+1) + 1
    }

    return res
};