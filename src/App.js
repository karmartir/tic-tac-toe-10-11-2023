import './App.css';
import {useEffect, useState} from "react";
import Board from "./Board";
import './App.css'

function App() {

    const initialState = Array(9).fill(null);
    //.map((_, index) => index) заполняет клетки цифрами идентичными индексу,
    // полезно запомнить, проще будет считать выигрышные комбинации!
    const [board, setBoard] = useState(initialState);
    const [oisNext, setOIsNext] = useState(false);
    const [winner, setWinner] = useState('');
    const [isDraw, setIsDraw] = useState(false);

    const makeMove = (i) => {
        // простая проверка перед выполнением -
        // ставим условие: чтобы срабатывало только если клетка пустая!!!
        if (board[i] === null) {

            const whoIsNext = oisNext ? 'O' : 'X';

            const newBoard = board.map((el, index) =>
                index === i ? whoIsNext : el
            )

            setBoard(newBoard)
            setOIsNext(oisNext => !oisNext) //определяем чей ход следующий
        }
    }

    const whoIsWinner = () => {
        const line = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        for (let i = 0; i < line.length; i++) {
            const [a, b, c] = line[i] // проводим деструктуризацию, например
            // line[i] = [0, 1, 2] это значит a = 0, b = 2, c = 2
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                //board[a] - проверка, что а не равно Null, a занято o или x
                /*и все три содержат одинаковый символ*/
                setWinner(board[a])
                setIsDraw(false)
            }

        }
        if (!board.includes(null)) {
            setIsDraw(true)
        }
    }

    const resetGame = () => {
        setBoard(initialState)
        setOIsNext(false)
        setWinner('')
        setIsDraw(false)
    }

    useEffect(() => {
        whoIsWinner()
    },);

    return (
        <div className="App">

            <Board
                board={board}
                winner={winner}
                makeMove={makeMove}
            />

            {winner && <h3>Congratulations! Winner is {winner}</h3>}

            <h3>{isDraw && "It's a Draw!"}</h3>  {/*если ничья */}

            {isDraw || winner ? <button onClick={resetGame}>Restart Game</button> : ''}

        </div>
    );
}

export default App;
