/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    let m = grid.length; let n = grid[0].length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == '1'){
                res++
                dfs(grid, i, j)
            }
        }
    }

    // 从(i, j)开始，将与之相邻的陆地都变成海水
    function dfs(grid, i, j){
        if(i < 0 || j < 0 || i >= m || j >= n){
            return
        }
        if(grid[i][j] == '0'){
            return
        }
        grid[i][j] = 0
        dfs(grid, i+1, j)
        dfs(grid, i-1, j)
        dfs(grid, i, j-1)
        dfs(grid, i, j+1)
    }

    return res
};