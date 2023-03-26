import { useState,useEffect } from "react"
import Square from "./Square"
const Board = ({ children }) => {
    const [game, setGame] = useState([
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
    const [player, setPlayer] = useState(true);
    const [isGameEnd, setIsGameEnd] = useState(false);
  
    const handlePlay = (position) => {
      if (isGameEnd) {
        return;
      }
      const newGame = game.map((g, index) => {
        if (index === position) {
          return player ? "X" : "O";
        }
        return g;
      });
      setGame(newGame);
      setPlayer(!player);
      const winner = checkWinner();
      if (winner) {
        setIsGameEnd(true);
      } else if (newGame.every((square) => square)) {
        setIsGameEnd(true);
        checkWinner("Hòa");
      }
    };
  
   
  
    const listWinner = [    [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
    ];
  
    const checkWinner = () => {
      for (let i = 0; i < listWinner.length; i++) {
        const [a, b, c] = listWinner[i];
        if (game[a] && game[a] === game[b] && game[b] === game[c]) {
          return game[a];
        }
      }
      return null;
    };
  
    const handleReset = () => {
      setGame([null, null, null, null, null, null, null, null, null]);
      setPlayer(true);
      setIsGameEnd(false);
    };

    return <>
<h2 className="">Winner is: {checkWinner() || (isGameEnd && "hòa")}</h2>
    <div className="grid grid-cols-3 gap-2 w-[240px] mt-4">
        <Square value={game[0]} position={0} handlePlay ={handlePlay}/>
        <Square value={game[1]} position={1} handlePlay={handlePlay}/>
        <Square value={game[2]} position={2} handlePlay={handlePlay}/>
        <Square value={game[3]} position={3} handlePlay={handlePlay}/>
        <Square value={game[4]} position={4} handlePlay={handlePlay}/>
        <Square value={game[5]} position={5} handlePlay={handlePlay}/>
        <Square value={game[6]} position={6} handlePlay={handlePlay}/>
        <Square value={game[7]} position={7} handlePlay={handlePlay}/>
        <Square value={game[8]} position={8} handlePlay={handlePlay}/>

    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleReset}>chơi lại</button>

    
    
    
    </>
}

export default Board