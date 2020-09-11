import './style.css';
import React from 'react';
import MenuButton from './MenuButton';

const Home = () => (
    <div className="wrapper">
        <h1>CONNECT 4</h1>
        <div id="menu">
            <MenuButton label="New Game" link="players" />
            <MenuButton label="Load Game" link="savedgames" />
            <MenuButton label="Contact" link="contact" />
        </div>
    </div>
)

export default Home;