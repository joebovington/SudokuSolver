import { Dispatch } from "react";


export function solveSudoku(board: number[][], updateBoard:Dispatch<number[][]>): boolean {
    var clonedBoard = structuredClone(board)
    const boardSolved = solveBoard(clonedBoard, 0, 0)
    if (JSON.stringify(clonedBoard) === JSON.stringify(board)) {
        return false
    }
    if (boardSolved) {
        updateBoard(clonedBoard)
        return true
    }
    return false
}

function solveBoard(board: number[][], row: number, col: number): boolean {
    if (col === 9 && row === 8) {
        return true;
    };

    if (col === 9) {
        row++;
        col = 0;
    };

    if (board[row][col] === 0) {
        for (let i = 1; i < 10; i++) {
            if (isValidBoard(board, row, col, i)) {
                board[row][col] = i;

                if (solveBoard(board, row, col+1)) {
                    return true;
                };
                board[row][col] = 0;
            };
        };
        return false
    };
    return solveBoard(board, row, col+1)
}

function isValidBoard(board: number[][], row: number, col: number, i: number): boolean {
    if (!checkRowRule(board, row, i)) {
        return false;
    };

    if (!checkColRule(board, col, i)) {
        return false;
    };

    if (!checkBoxRule(board, row, col, i)) {
        return false;
    };
    
    return true;
}

function checkRowRule(board: number[][], row: number, num: number): boolean {
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === num) {
            return false;
        };
    };
    return true;
}

function checkColRule(board: number[][], col: number, num: number): boolean {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return false;
        };
    };
    return true;
}

function checkBoxRule(board: number[][], row: number, col: number, num: number): boolean {
    const rowStart = row - (row % 3);
    const colStart = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[rowStart+i][colStart+j] === num) {
                return false;
            };
        };
    };
    return true;
}
