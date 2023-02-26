import React, { useEffect, useState } from "react";
import styles from "../styles.css";

const yAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const ChessBoard = () => {
  let board = [];
  const [clickedTile, setClickedTile] = useState("");
  const [positions, setPositions] = useState([]);

  for (let j = yAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < xAxis.length; i++) {
      const number = j + i + 2;

      board.push(
        <div
          onClick={() => setClickedTile(xAxis[i] + yAxis[j])}
          id={i + j}
          className={number % 2 === 0 ? "tile black-tile" : "tile white-tile"}
          style={
            positions.includes(xAxis[i] + yAxis[j])
              ? {
                  backgroundColor: "lightgreen",
                }
              : {}
          }
        >
          {clickedTile === xAxis[i] + yAxis[j] ? "Knight" : ""}
        </div>
      );
    }
  }

  useEffect(() => {
    if (clickedTile !== "") {
      let column = yAxis.indexOf(clickedTile.split("")[1]);
      let row = xAxis.indexOf(clickedTile.split("")[0]);

      const p1 = xAxis[row + 1] + yAxis[column + 2];
      const p2 = xAxis[row - 1] + yAxis[column + 2];
      const p3 = xAxis[row + 1] + yAxis[column - 2];
      const p4 = xAxis[row - 1] + yAxis[column - 2];
      const p5 = xAxis[row + 2] + yAxis[column + 1];
      const p6 = xAxis[row + 2] + yAxis[column - 1];
      const p7 = xAxis[row - 2] + yAxis[column + 1];
      const p8 = xAxis[row - 2] + yAxis[column - 1];

      setPositions([p1, p2, p3, p4, p5, p6, p7, p8]);
    }
  }, [clickedTile]);

  console.log(clickedTile);
  console.log(positions);

  return <div className="chessBoard">{board}</div>;
};

export default ChessBoard;
