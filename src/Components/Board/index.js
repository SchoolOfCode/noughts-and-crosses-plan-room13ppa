import React from "react";

function Board(board, makeMove) {
  //3x3 table
  return (
    <>
      <table className="table">
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}

export default Board;
