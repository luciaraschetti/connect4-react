import './style.css';
import React from 'react';

const Slot = (props) => <div id={`s${props.id}`} className="slot"></div>;
const Column = (props) =><div id={`c${props.id}`} className="column" onClick={() => props.click()}>{renderSlot()}</div>;

const renderSlot = () => {
    let slots = [];
    for (let i = 0; i < 6; i++) {
        slots.push(<Slot id={i} key={i} />);
    }
    return (slots);
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            boardState: new Array(7).fill(new Array(6).fill(null)),
            turn: 'p1'
        };
    }
    
    click(id) {
        const cols = this.state.boardState;
        cols[id][id] = this.state.turn;
        this.setState({
            boardState: cols,
        });
        console.log(this.state.boardState)
    }

    render() {
        let columns = [];
        for(let i = 0; i < this.state.boardState.length; i++) {
            columns.push(
            <Column 
                id={i} 
                key={i} 
                click={() => this.click(i)}
            />);
        }
        return(columns);
    }
}

const Game = () => (
    <>
        <div className="wrapper">
            <div id="game">
                <div id="gameboard">
                    <div id="play-area">
                        <Board />
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Game;