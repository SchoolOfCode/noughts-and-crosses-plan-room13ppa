import { useState } from "react";
import Board from "../Board/index.js";

export default function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [turn, setTurn] = useState(true);

  function calculateWinner(board) {
    const combo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combo.length; i++) {
      const [a, b, c] = combo[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const currentPlayer = turn ? "X" : "O";

  function handleClick(index) {
    if (winner || board[index]) {
      return;
    }

    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);
    setTurn(!turn);
  }

  return (
    <>
      <p>Hello</p>
      <Board board={board} handleClick={handleClick} />
      <h3>{winner ? "Winner: " + winner : "Next Player: " + currentPlayer}</h3>
    </>
  );
}
