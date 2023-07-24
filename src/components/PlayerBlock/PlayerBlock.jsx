import React from "react";
import "./style.css";

export default function PLayerBlock({ player, click }) {
  return (
    <div
      className="player-block"
      style={player.id === click ? { opacity: 1 } : { opacity: 0.5 }}
    >
      <h1 style={{ color: "#9f0442" }}>Player {player.id}</h1>
      <h1 style={{ fontSize: "4.5rem", color: "#9f0442" }}>{player.total}</h1>
      <div className="current">
        Current <h2>{player.current}</h2>
      </div>
    </div>
  );
}
