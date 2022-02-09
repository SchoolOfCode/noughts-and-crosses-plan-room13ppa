import React from "react";
import './index.css';
import Square from "../Square";

function Board({handleClick}) {
  //3x3 table
  
  return (
    <>
    
      <table className="table">
        <tbody>
        <tr>
          <Square handleClick={()=> handleClick(0)}/>
          <Square handleClick={()=> handleClick(1)}/>
          <Square handleClick={()=> handleClick(2)}/>
        </tr>
        <tr>
          <Square handleClick={()=> handleClick(3)}/>
          <Square handleClick={()=> handleClick(4)}/>
          <Square handleClick={()=> handleClick(5)}/>
        </tr>
        <tr>
          <Square handleClick={()=> handleClick(6)}/>
          <Square handleClick={()=> handleClick(7)}/>
          <Square handleClick={()=> handleClick(8)}/>
        </tr>
        </tbody>
      </table>
    </>
  );
}

export default Board;
