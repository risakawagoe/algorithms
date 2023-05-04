// 2023-05-04
// Algorithm: Islands (Matrix Traversal)
// this pattern is useful when traversing matrises

import { count_islands_DFS } from "./DFS_approach.js"
import { count_islands_BFS } from "./BFS_approach.js"

function test_DFS() {
    // test cases
    let matrix1 = [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    let matrix2 = [
        [1, 1, 1, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ]
    let testcases = [matrix1, matrix2]
    testcases.forEach(matrix => console.log(count_islands_DFS(matrix)))
}

function test_BFS() {
    // test cases
    let matrix1 = [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    let matrix2 = [
        [1, 1, 1, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ]
    
    let testcases = [matrix1, matrix2]
    testcases.forEach(matrix => console.log(count_islands_BFS(matrix)))
}

test_DFS()
test_BFS()