import React from "react";

function Square({ handleClick,value}) {
  return (
    <td onClick={handleClick}>
       {value}
    </td>
  );
}

export default Square;
