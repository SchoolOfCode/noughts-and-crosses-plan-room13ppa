import React from "react";
import "./index.css";
import Square from "../Square";

function Board({ board, handleClick }) {
  //3x3 table

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <Square value={board[0]} handleClick={() => handleClick(0)} />
            <Square value={board[1]} handleClick={() => handleClick(1)} />
            <Square value={board[2]} handleClick={() => handleClick(2)} />
          </tr>
          <tr>
            <Square value={board[3]} handleClick={() => handleClick(3)} />
            <Square value={board[4]} handleClick={() => handleClick(4)} />
            <Square value={board[5]} handleClick={() => handleClick(5)} />
          </tr>
          <tr>
            <Square value={board[6]} handleClick={() => handleClick(6)} />
            <Square value={board[7]} handleClick={() => handleClick(7)} />
            <Square value={board[8]} handleClick={() => handleClick(8)} />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Board;
