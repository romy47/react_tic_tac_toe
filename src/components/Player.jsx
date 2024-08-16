import { useState } from "react";
export default function Player({ initialName, symbol }) {
    const [isEditingPlayerName, setIsEditingPlayerName] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditPlayerBtnClick() {
        setIsEditingPlayerName((editing) => !editing);
    }

    function handleChangePlayerName(event) {
        setPlayerName(event.target.value);
    }

    let playerNameElement = <span class='me-4 player-name'>{playerName}</span>
    if (isEditingPlayerName) {
        playerNameElement = <input type='text' class='me-4 player-name' value={playerName} onChange={handleChangePlayerName}></input>
    }
    return (
        <li class='d-flex align-items-center'>
            {playerNameElement}
            <span class='me-4'>{symbol}</span>
            <button onClick={handleEditPlayerBtnClick} class='edit-player-name-btn btn btn-outline-light btn-sm'>{isEditingPlayerName ? 'Save' : 'Edit'}</button>
        </li>
    );
}