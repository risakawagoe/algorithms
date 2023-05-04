// IMPORTANT: this code is still incorrect (in progress)

export function biggest_island_BFS(matrix) {
    let biggestIsland = 0

    for(let x = 0; x < matrix.length; x++) {
        for(let y = 0; y < matrix[0].length; y++) {
            if(matrix[x][y] === 1) {
                let size = measure_island_size(matrix, x, y)
                console.log("size: " + size)
                biggestIsland = size > biggestIsland ? size : biggestIsland
            }
        }

    }
    return biggestIsland
}

function measure_island_size(matrix, x, y) {
    
    let size = 0
    let neighbors = [{x: x, y: y}]

    while(neighbors.length > 0) {
        let crd = neighbors.shift()
        console.log(crd)

        if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || matrix[x][y] === 0) {
            continue
        }

        matrix[crd.x][crd.y] = 0
        size++

        // add neighbors to queue
        neighbors.push({ x: crd.x + 1, y: crd.y }) // bottom
        neighbors.push({ x: crd.x - 1, y: crd.y }) // top
        neighbors.push({ x: crd.x, y: crd.y + 1 }) // right
        neighbors.push({ x: crd.x, y: crd.y - 1 }) // left
    }

    return size
}