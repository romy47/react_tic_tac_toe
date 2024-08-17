import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import GameMatrix from './components/GameMatrix';

function App() {
  return (
    <div className='App'>
      <div id='game-board' class='bg-secondary border-1 rounded mt-5 d-flex flex-column'>
        <ul id='game-players' class='list-unstyled d-flex justify-content-around text-white fs-4 py-4'>
          <Player initialName='Player 1' symbol='X' />
          <Player initialName='Player 2' symbol='O' />
        </ul>

        <GameMatrix />
      </div>
    </div>
  );
}

export default App;
