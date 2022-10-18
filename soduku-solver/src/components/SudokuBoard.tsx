import React, { Dispatch} from 'react';
import './SudokuBoard.css';

interface CellProps {
    selectedNumber: number;
    boardMatrix: number[][];
    row: number;
    col: number;
    updateBoard: Dispatch<number[][]>
    setSolved: Dispatch<boolean>
    setAttemptedSolve: Dispatch<boolean>
}

export const Cell:React.FC<CellProps> = ({selectedNumber, boardMatrix, row, col, updateBoard, setSolved, setAttemptedSolve}) => {
    const updateCellValue = () => {
        var clonedBoard = structuredClone(boardMatrix)
        clonedBoard[row][col] = selectedNumber;
        updateBoard(clonedBoard)
        setSolved(false)
        setAttemptedSolve(false)
    }
    return(    
        <div className={selectedNumber === boardMatrix[row][col] && selectedNumber !== 0 ? 'Cell selected' : 'Cell'} onClick={e =>updateCellValue()}>
            {boardMatrix[row][col] ? boardMatrix[row][col] : ' ' }
        </div>
    );
};

interface SudokuBoardProps{
    selectedNumber: number,
    boardMatrix: number[][],
    updateBoard: Dispatch<number[][]>
    setSolved: Dispatch<boolean>
    setAttemptedSolve: Dispatch<boolean>
}

export const SudokuBoard:React.FC<SudokuBoardProps> = ({selectedNumber, boardMatrix, updateBoard, setSolved, setAttemptedSolve}) => {
    return(
        <div className="Sudoku-board">
            {boardMatrix.map((row, rowindex) => (
                <div className="Row">
                    {row.map((cell, colIndex) => (
                        <Cell selectedNumber={selectedNumber} boardMatrix={boardMatrix} row={rowindex} col={colIndex} updateBoard={updateBoard} setSolved={setSolved} setAttemptedSolve={setAttemptedSolve}></Cell>
                    ))}
                </div>
            ))}
        </div>
    )
}