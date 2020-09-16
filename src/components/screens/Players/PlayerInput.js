import "./PlayerInput.css";
import React from "react";

const PlayerInput = (props) => (
    <>
        <input 
            id={`${props.player}-name`} 
            className={props.player === 'P3' ? 'player hidden' : 'player'}
            type="text" 
            maxLength="6"
        />
        <div 
            id={`${props.player}-tag`} 
            className={props.player === 'P3' ? 'tag hidden' : 'tag'}
        >
            {props.player}
        </div>
    </>
)

export default PlayerInput;