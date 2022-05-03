/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let m = grid1.length; let n = grid1[0].length;
    let res= 0
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            // grid2为0二grid1为1，grid2中这个岛屿一定不被grid1包括
            if(grid1[i][j] == 0 && grid2[i][j] == 1){
                // 将这种岛屿淹了,剩下的就都是包括的
                dfs(grid2, i, j)
            }
        }
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid2[i][j] == 1){
                res++
                dfs(grid2, i, j)
            }
        }
    }

    function dfs(grid, i, j){
        if(i < 0 || j < 0 || i >= m || j >= n){
            return
        }
        if(grid[i][j] == 0){
            return
        }

        grid[i][j] = 0
        dfs(grid, i-1, j)
        dfs(grid ,i+1, j)
        dfs(grid, i, j-1)
        dfs(grid, i, j+1)
    }

    return res
};