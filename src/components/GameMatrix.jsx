import { useState } from "react";
const initialMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameMatrix({ playerTurns, handlePlayerTurn }) {
    let gameMatrix = initialMatrix;
    for (let turn of playerTurns) {
        const { cell, player } = turn;
        const { rowIndex, colIndex } = cell;
        gameMatrix[rowIndex][colIndex] = player;
    }
    return (
        <div className='m-3 d-flex flex-column justify-content-between  flex-grow-1'>
            {gameMatrix.map(
                (row, rowIndex) => <ul key={rowIndex} className='d-flex justify-content-between flex-grow-1 p-0 m-0'>
                    {
                        row.map((cell, colIndex) => <button key={`${rowIndex}-${colIndex}`} className='w-100 m-1 text-secondary fw-bold display-1' onClick={() => handlePlayerTurn(rowIndex, colIndex)}>
                            &#8288;{gameMatrix[rowIndex][colIndex]}
                        </button>)
                    }
                </ul>
            )}
        </div>

    )
}