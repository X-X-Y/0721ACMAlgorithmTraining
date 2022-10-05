/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let res = 0
    let dx = [0, 1, 0, -1]
    let dy = [1, 0, -1, 0]

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                res += dfs(grid, i, j)
            }
        }
    }

    function dfs(grid, i, j){
        // 四周是水和边界时，边长返回1
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0){
            return 1
        }
        // 已经遍历过的陆地，相邻边长不加
        if(grid[i][j] == 2){
            return 0
        }
        grid[i][j] = 2
        let ant = 0
        for(let k = 0; k < 4; k++){
            let x = i + dx[k]
            let y = j + dy[k]
            ant += dfs(grid, x, y)
        }
        return ant
    }

    return res
};