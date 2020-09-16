import './style.css';
import PlayerInput from './PlayerInput';
import {Link} from 'react-router-dom';
import React from 'react';

const Players = () => (
    <div className="wrapper">
        <div className="player-names">
            <p id="title">Players</p>
            <div className="input-style">
                <PlayerInput player="P1" />
            </div>
            <div className="input-style">
                <PlayerInput player="P2" />
            </div>
            <div className="input-style">
                <div id="btn-container">
                    <button id="add-player" className="btn" type="button">+</button>
                </div>
                <PlayerInput player="P3" />
            </div>
            <Link to="game" id="start-btn" className="btn" type="button">Start Game</Link>
        </div>
    </div>
)

export default Players;