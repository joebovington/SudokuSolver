import React, {useState, Dispatch} from 'react';
import { NumberPallet } from './components/NumberPallet';
import { SudokuBoard } from './components/SudokuBoard';
import { SolveButton } from './components/SolveButton';
import './App.css';


function App() {
  const [selectedNumber, setSelectedNumber]: [number | undefined, Dispatch<number>] = useState(0)
  const [board, setBoard]: [number[][], Dispatch<number[][]>] = useState([...Array(9)].map(e => Array(9).fill(0)))
  const [solved, setSolved]: [boolean, Dispatch<boolean>] = useState(false)
  const [attemptedSolve, setAttemptedSolve]: [boolean, Dispatch<boolean>] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sudoku Solver
        </h1>
      </header>
      <body className="App-body">
        <div>
          {solved && attemptedSolve && (<p>Solved</p>)}
          {!solved && attemptedSolve && (<p>Failed to solve</p>)}
        </div>
        <div>
          <SudokuBoard selectedNumber={selectedNumber} boardMatrix={board} updateBoard={setBoard} setSolved={setSolved} setAttemptedSolve={setAttemptedSolve}/>
        </div>
        <div>
          <NumberPallet setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberPallet>
        </div>
        <div>
          <SolveButton boardMatrix={board} updaterFunction={setBoard} setSolved={setSolved} setAttemptedSolve={setAttemptedSolve} attemptedSolve={attemptedSolve}></SolveButton>
        </div>
      </body>
    </div>
  );
}

export default App;
