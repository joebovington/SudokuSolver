import React, { Dispatch } from 'react';
import { solveSudoku } from '../Solver'
import './SolveButton.css';

interface SolveButtonProps {
    boardMatrix: number[][]
    updaterFunction: Dispatch<number[][]>
    setSolved: Dispatch<boolean>
    setAttemptedSolve: Dispatch<boolean>
    attemptedSolve: boolean
}

export const SolveButton:React.FunctionComponent<SolveButtonProps> = ({boardMatrix, updaterFunction, setSolved, setAttemptedSolve, attemptedSolve}) => {
    const solveButtonClicked = () => {
        if (!attemptedSolve){
            setAttemptedSolve(true)
            solveSudoku(boardMatrix, updaterFunction) ? setSolved(true) : setSolved(false) 
        }
    }
    return (
        <button className='Solve-button' onClick={e => solveButtonClicked()}>
            Solve
        </button>
    )
}