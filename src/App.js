import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

function App() {
  return (
    <div className='App'>
      <div id='game-board' class='bg-secondary border-1 rounded mt-5'>
        <ul id='game-players' class='list-unstyled d-flex justify-content-around text-white fs-4 py-4'>
          <Player name='Player 1' symbol='X' />
          <Player name='Player 2' symbol='O' />
        </ul>
      </div>
    </div>
  );
}

export default App;
