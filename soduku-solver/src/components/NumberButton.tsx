import React, {Dispatch} from 'react';
import './NumberButton.css';

interface NumberButtonProps{
    number: number;
    selectedNumber: number;
    setSelectedNumber: Dispatch<number>;
}

export const NumberButton:React.FC<NumberButtonProps> = ({number, selectedNumber, setSelectedNumber}) => {
    return(    
        <div className={selectedNumber === number ? 'Number-button selected' : 'Number-button'} onClick={e => setSelectedNumber(number)}>
            {number}
        </div>
    );
};


interface ClearNumberButtonProps{
    setSelectedNumber: Dispatch<number>,
    selectedNumber: number;
}

export const ClearNumberButton:React.FC<ClearNumberButtonProps> = ({setSelectedNumber, selectedNumber}) => {
    return(    
        <div className={selectedNumber === 0 ? 'Number-button selected' : 'Number-button'} onClick={e => setSelectedNumber(0)}>
            X
        </div>
    );
};
  