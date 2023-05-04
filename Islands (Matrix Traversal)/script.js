// 2023-05-04
// Algorithm: Islands (Matrix Traversal)


function count_islands_DFS(matrix) {
    let count = 0

    // find unvisited island
    for(let x = 0; x < matrix.length; x++) {
        for(let y = 0; y < matrix[0].length; y++) {
            if(matrix[x][y] === 1) {
                count++

                // check neighboring cells
                visit_cell(matrix, x, y)
            }
        }
    }
    return count
}


function visit_cell(matrix, x, y) {
    // do not do anything if
        // 1: out of bound, or
        // 2: value is 0 (water)
    if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || matrix[x][y] === 0) {
        return;
    }

    matrix[x][y] = 0
    
    // visit neighnoring cells
    visit_cell(matrix, x + 1, y) // bottom
    visit_cell(matrix, x - 1, y) // top
    visit_cell(matrix, x, y + 1) // right
    visit_cell(matrix, x, y - 1) // left
}

// test cases
console.log(count_islands_DFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
]));
console.log(count_islands_DFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
]));
console.log(count_islands_DFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
]));