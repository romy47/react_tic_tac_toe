import { useState } from "react";
const initialMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameMatrix({ activePlayer, handlePlayerTurn }) {
    const [matrix, setMatrix] = useState(initialMatrix);
    function handleCellClick(rowIndex, colIndex) {
        setMatrix((prevMatrix) => {
            let updatedMatrix = [...prevMatrix.map(row => [...row])];
            updatedMatrix[rowIndex][colIndex] = activePlayer;
            return updatedMatrix;
        });
        handlePlayerTurn();
    }
    let cellKey = 0;
    return (
        <div className='m-3 d-flex flex-column justify-content-between  flex-grow-1'>
            {matrix.map(
                (row, rowIndex) => <ul key={rowIndex} className='d-flex justify-content-between flex-grow-1 p-0 m-0'>
                    {
                        row.map((cell, colIndex) => <button key={`${rowIndex}-${colIndex}`} className='w-100 m-1' onClick={() => handleCellClick(rowIndex, colIndex)}>
                            &nbsp;{matrix[rowIndex][colIndex]}
                        </button>)
                    }
                </ul>
            )}
        </div>

    )
}