import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import GameMatrix from './components/GameMatrix';
import { WINNING_CONDITIONS } from './utilities/winning-conditions';
import { useState } from "react";

const initialMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function getCurrentPlayer(turns = []) {
  return turns.length > 0 && turns[turns.length - 1].player === 'X' ? 'O' : 'X'
}

function findWinner(matrix) {
  let winner = null;
  for (const condition of WINNING_CONDITIONS) {
    const firstCell = matrix[condition[0].rowIndex][condition[0].colIndex];
    const secondCell = matrix[condition[1].rowIndex][condition[1].colIndex];
    const thirdCell = matrix[condition[2].rowIndex][condition[2].colIndex];

    if (firstCell && firstCell === secondCell && firstCell === thirdCell) {
      winner = firstCell;
      break;
    }
  }
  return winner;
}

function App() {
  const [playerTurns, setPlayerTurns] = useState([]);
  let activePlayer = getCurrentPlayer(playerTurns);
  let gameMatrix = initialMatrix;

  for (let turn of playerTurns) {
    const { cell, player } = turn;
    const { rowIndex, colIndex } = cell;
    gameMatrix[rowIndex][colIndex] = player;
  }

  const winner = findWinner(gameMatrix);

  function handlePlayerTurn(rowIndex, colIndex) {
    setPlayerTurns((prevTurns) => {
      let currentPlayer = getCurrentPlayer(prevTurns)
      let newTurns = [...prevTurns];
      newTurns.push({ cell: { rowIndex: rowIndex, colIndex: colIndex }, player: currentPlayer })
      return newTurns;
    });
  }

  return (
    <div className='App'>
      <div id='game-board' className='bg-secondary border-1 rounded mt-5 d-flex flex-column'>
        <ul id='game-players' className='list-unstyled d-flex justify-content-around text-white fs-4 py-4'>
          <Player isActive={activePlayer === 'X'} initialName='Player 1' symbol='X' />
          <Player isActive={activePlayer === 'O'} activePlayer={activePlayer} initialName='Player 2' symbol='O' />
        </ul>
        {winner &&
          <p className='text-center text-white fs-4'>
            Congratulations! You Won {winner}
          </p>
        }
        <GameMatrix handlePlayerTurn={handlePlayerTurn} winner={winner} gameMatrix={gameMatrix} />
      </div>
    </div>
  );
}

export default App;
