import { useState } from "react";

export default function GameMatrix({ gameMatrix, handlePlayerTurn }) {
    return (
        <div className='m-3 d-flex flex-column justify-content-between  flex-grow-1'>
            {gameMatrix.map(
                (row, rowIndex) => <ul key={rowIndex} className='d-flex justify-content-between flex-grow-1 p-0 m-0'>
                    {
                        row.map((cell, colIndex) => <button key={`${rowIndex}-${colIndex}`} className='w-100 m-1 text-secondary fw-bold display-1' onClick={() => handlePlayerTurn(rowIndex, colIndex)} disabled={gameMatrix[rowIndex][colIndex] !== null}>
                            &#8288;{gameMatrix[rowIndex][colIndex]}
                        </button>)
                    }
                </ul>
            )}
        </div>

    )
}