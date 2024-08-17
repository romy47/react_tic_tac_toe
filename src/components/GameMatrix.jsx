import { useState } from "react";
const initialMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameMatrix() {
    let matrix = initialMatrix;
    return (
        <div class='m-3 d-flex flex-column justify-content-between'>
            {matrix.map(
                (row, rowIndex) => <ul class='d-flex justify-content-between flex-grow-1 p-0 m-0'>
                    {
                        row.map((cell, colIndex) => <button class='w-100 m-1 '>
                            &nbsp;{matrix[rowIndex, colIndex]}
                        </button>)
                    }
                </ul>
            )}
        </div>

    )
}