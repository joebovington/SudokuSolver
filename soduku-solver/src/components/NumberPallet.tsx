import React, {Dispatch} from 'react';
import {NumberButton, ClearNumberButton} from './NumberButton';
import './NumberPallet.css';

interface NumberPalletProps{
    setSelectedNumber: Dispatch<number>,
    selectedNumber: number
}

export const NumberPallet:React.FC<NumberPalletProps> = ({setSelectedNumber, selectedNumber}) => {

    return (
        <div className="Number-pallet">
            <NumberButton number={1} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={2} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={3} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={4} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={5} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={6} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={7} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={8} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <NumberButton number={9} setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></NumberButton>
            <ClearNumberButton setSelectedNumber={setSelectedNumber} selectedNumber={selectedNumber}></ClearNumberButton>
        </div>
    )
}