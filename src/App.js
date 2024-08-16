import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="game-board" class='bg-secondary border-1 rounded mt-5'>
        <ul id="game-players" class="list-unstyled d-flex justify-content-around text-white fs-4 py-4">
          <li>
            <span class="me-5">Player 1</span>
            <span>X</span>
          </li>
          <li>
            <span class="me-5">Player 2</span>
            <span>O</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
