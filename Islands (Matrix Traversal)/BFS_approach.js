// basic idea
// use queueArr.push(), queueArr.shift()
// queue array is used to keep track of neighbors
// all neighbours get pushed into the queue first, hence direct neighbors are visited before any further neighbors

export function count_islands_BFS(matrix) {
    let totalIslands = 0

    // find unvisited island
    for(let x = 0; x < matrix.length; x++) {
        for(let y = 0; y < matrix[0].length; y++) {
            if(matrix[x][y] === 1) {
                totalIslands++

                // check neighboring cells
                visit_cell(matrix, x, y)
            }
        }
    }
    return totalIslands
}

function visit_cell(matrix, x, y) {

    let neighbors = [
        {x: x, y: y}
    ]

    while(neighbors.length > 0) {
        const crd = neighbors.shift()

        // do not do anything if 1) out of bound, or 2) value is 0 (water)
        if(crd.x < 0 || crd.x >= matrix.length || crd.y < 0 || crd.y >= matrix[0].length || matrix[crd.x][crd.y] === 0) {
            continue;
        }

        // update as visited
        matrix[crd.x][crd.y] = 0

        // put neighbors of neighbor into the queue
        neighbors.push({ x: crd.x + 1, y: crd.y }) // bottom
        neighbors.push({ x: crd.x - 1, y: crd.y }) // top
        neighbors.push({ x: crd.x, y: crd.y + 1 }) // right
        neighbors.push({ x: crd.x, y: crd.y - 1 }) // left
    }
}