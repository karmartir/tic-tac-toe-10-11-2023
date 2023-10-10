export default function Square({square, index, makeMove, winner}) {

    const squareStyle = {
        border: 'solid black 1px',
        fontSize: '70px',
        fontWeight: '700',
        cursor: 'pointer',
        //меняем цвет содержимого ячейки square с помощью тернарного оператора
        color: `${square === 'X' ? 'black' : 'red'}`
    }

    return (
        <button
            disabled={winner}
            style={squareStyle}
            onClick={() => makeMove(index)}
        >

            {square}
        </button>
    )
};