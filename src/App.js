import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import GameMatrix from './components/GameMatrix';
import { useState } from "react";

function getCurrentPlayer(turns = []) {
  return turns.length > 0 && turns[turns.length - 1].player === 'X' ? 'O' : 'X'
}

function App() {
  const [playerTurns, setPlayerTurns] = useState([]);
  let activePlayer = getCurrentPlayer(playerTurns);

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

        <GameMatrix handlePlayerTurn={handlePlayerTurn} playerTurns={playerTurns} />
      </div>
    </div>
  );
}

export default App;
