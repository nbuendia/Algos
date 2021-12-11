// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) matrix[i] = [];
    let num = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        //TOP-ROW
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num;
            num++;
        }
        startRow++;

        //RIGHT COLUMN
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = num;
            num++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = num;
            num++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = num;
            num++
        }
        startCol++
    }
    
    return matrix;
}

module.exports = matrix;
