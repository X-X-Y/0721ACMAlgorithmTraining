/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = []
    let path = []
    let n = graph.length - 1

    function trackback(graph, path, node){
        // 添加节点node到路径
        path.push(node)

        // 到达终点
        if(n === node){
            res.push([...path])
            path.pop()
            return
        }

        // 遍历node节点相邻的节点
        for(let i of graph[node]){
            trackback(graph, path, i)
        }

        // 从路径中移除node节点
        path.pop()
    }

    trackback(graph, path, 0)
    return res
};