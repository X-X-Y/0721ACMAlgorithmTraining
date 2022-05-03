/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    // 将四周的岛屿全淹了，剩下的就是封闭岛屿
    let res = 0
    let m = grid.length; let n = grid[0].length;
    for(let i = 0; i < m; i++){
        dfs(grid, i, 0)
        dfs(grid, i, n-1)
    }
    for(let j = 0; j < n; j++){
        dfs(grid, 0, j)
        dfs(grid, m-1, j)
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 0){
                res++
                dfs(grid, i, j)
            }
        }
    }

    // 从(i, j)开始，淹掉自己和相邻的陆地
    function dfs(grid, i, j){
        if(i < 0 || j < 0 || i >= m || j >= n){
            return
        }
        if(grid[i][j] == 1){
            return
        }
        grid[i][j] = 1
        dfs(grid, i-1, j)
        dfs(grid, i+1, j)
        dfs(grid, i, j-1)
        dfs(grid, i, j+1)
    }

    return res
};