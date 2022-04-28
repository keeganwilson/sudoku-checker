// Sudoku Background:
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator:
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

const sudokuChecker = solution => {
    let rows = true;
    let columns = true;
    let subGrids = true;
    let columns2DArr = [[], [], [], [], [], [], [], [], []];
    let subGrids2DArr = [[], [], [], [], [], [], [], [], []];

    //Checking if rows are valid    
    for (let i = 0; i < solution.length; i++) {
        for (let j = 0; j < solution.length; j++) {
            for (let k = j + 1; k < solution.length; k++) {
                if (rows === false) {
                }   else if (solution[i].includes(0)) {
                        return false
                }   else if (solution[i][j] === solution[i][k]) {
                        return false
                }
            }
        }   
    }

    for (let i = 0; i < solution.length; i++) {
        for (let j = 0; j < solution.length; j++) {
            columns2DArr[i].push(solution[j][i])
        }
    }
    for (let i = 0; i < columns2DArr.length; i++) {
        for (let j = 0; j < columns2DArr.length - 1; j++) {
            for (let k = j + 1; k < columns2DArr.length; k++) {
                if (columns === false) {
                }   else if (columns2DArr[i][j] === columns2DArr[i][k]) {
                        return false
                }
            }
        }
    }
    //Checking if sub grids are valid
    for (let i = 0; i < solution.length; i++){
        for (let j = 0; j < solution.length; j++) {
            for (let k = 0; k < solution.length; k++) {
                if (j < 3) {
                    if (k < 3) {
                        subGrids2DArr[0].push(solution[j][k])
                    }   else if (k > 2 && k < 6) {
                        subGrids2DArr[1].push(solution[j][k])
                    }   else subGrids2DArr[2].push(solution[j][k])                    
                }   else if (j > 2 && j < 6) {
                        if (k < 3) {
                            subGrids2DArr[3].push(solution[j][k])
                        }   else if (k > 2 && k < 6) {
                            subGrids2DArr[4].push(solution[j][k])
                        }   else subGrids2DArr[5].push(solution[j][k])
                
                }   else {
                        if (k < 3) {
                            subGrids2DArr[6].push(solution[j][k])
                        }   else if (k > 2 && k < 6) {
                            subGrids2DArr[7].push(solution[j][k])
                    }   else subGrids2DArr[8].push(solution[j][k])
                }
            }           
        } 
    }
    for (let i = 0; i < subGrids2DArr.length; i++) {
        for (let j = 0; j < subGrids2DArr.length - 1; j++) {
            for (let k = j + 1; k < subGrids2DArr.length; k++) {
                if (subGrids === false) {
                }   else if (subGrids2DArr[i][j] === subGrids2DArr[i][k]) {
                        return false
                }
            }
        }   return true;
    // }
    // if (rows === false || columns === false || subGrids === false) {
    //     return false
    // }   else return true   
}
}
console.log(sudokuChecker([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]))

console.log(sudokuChecker([[5, 3, 4, 0, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 0, 3, 4, 8],
                           [1, 0, 0, 3, 4, 2, 5, 6, 0],
                           [8, 5, 9, 7, 6, 1, 0, 2, 0],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 0, 1, 5, 3, 7, 2, 1, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 0, 0, 4, 8, 1, 1, 7, 9]]))

console.log(sudokuChecker([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 2, 3, 4, 8],
                           [1, 7, 8, 3, 4, 2, 5, 6, 9],
                           [8, 5, 9, 7, 6, 1, 1, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 4, 1, 5, 3, 7, 2, 1, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 3, 4, 4, 8, 1, 1, 7, 9]]))