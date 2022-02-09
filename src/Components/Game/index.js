import { useState } from "react";

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

  const player1 = "X";
  const player2 = "O";

  function checkEmpty(){
    //loop through board and check each box is null, 
    // if null, setTurn true, else false
    // player1 X in that square.
  }
  return <div>index</div>;
}


{
  A1: null,
  B2: null,...C3:null,
}


board[5] false;