import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTurns(preTruns => {
      let curActivePlayer = "X";

      if(prevTurns.length > 0 && preTruns[0].player === "X"){
        curActivePlayer = "O";
      }

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: activePlayer},
        ...preTruns
      ];
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName = "Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName = "Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

      <LOG />
    </main>
  )
}

export default App
