import React from 'react';
import Square from "./Square";

const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    width: '400px',
    height: '400px',
    margin: 'auto',
    border: 'solid black 2px'
}

const Board = ({board, winner, makeMove}) => {

    return (
        <div style={boardStyle}>
            {board.map((el, index) =>
                <Square
                    key={index}
                    index={index}
                    square={el}
                    winner={winner}
                    makeMove={makeMove}
                />)}
        </div>
    );
};

export default Board;