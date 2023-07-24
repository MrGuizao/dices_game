import React, { useState } from "react";
import PlayerBlock from "./components/PlayerBlock/PlayerBlock";
import Button from "./components/Button/Button";
import "./App.css";

const players = [
  { id: 1, current: 0, total: 0 },
  { id: 2, current: 0, total: 0 },
];

export default function App() {
  const [playerStats, setPlayerStats] = useState(players);
  const [isClicked, setIsCLicked] = useState(1);
  const [random, setRandom] = useState(null);
  let status = true;

  const handleWinner = () => {
    if (playerStats[0].total >= 10 || playerStats[1].total >= 10) {
      status = false;
      setRandom(null);
    }
  }

  // atualiza o SCORE ATUAL do player ativo
  const handleCurrentScore = () => {
    handleWinner();
    if (status) {
      const randomNumber = Math.floor(Math.random() * 6) + 1; // gera o numero aleatorio do dado
      setRandom(randomNumber);
      if (randomNumber !== 1) {
        setPlayerStats(playerStats.map(player => player.id === isClicked ?
          { ...player, current: player.current + randomNumber } : player))
      } else {
        setPlayerStats(playerStats.map(player => player.id === isClicked ?
          { ...player, current: 0 } : player))
        setIsCLicked(isClicked === 1 ? 2 : 1);
      }
    }
  }

  // atualiza o SCORE TOTAL do player ativo
  const handleTotalScore = () => {
    handleWinner();
    if (status) {
      setPlayerStats(playerStats.map((player) => player.id === isClicked ?
        { ...player, total: player.total + player.current, current: 0 } : player))
      setIsCLicked(isClicked === 1 ? 2 : 1);
    }
  }

  // reseta o jogo
  const handleReset = () => {
    setPlayerStats(players);
    setIsCLicked(1);
    status = true;
  };

  return (
    <main className="block">
      {playerStats.map((player) => (
        <PlayerBlock key={player.id} player={player} click={isClicked} />
      ))}
      <Button
        random={random}
        current={handleCurrentScore}
        total={handleTotalScore}
        reset={handleReset}
      />
    </main>
  );
}
