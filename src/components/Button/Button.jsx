import React from "react";
import { Image } from "../Image/Image";
import "./style.css";

export default function Button({ random, current, total, reset }) {
  return (
    <div className="center-block">
      <Image random={random} />
      <div>
        <button onClick={current}>Roll dice</button>
        <button onClick={total}>Hold value</button>
        <button onClick={reset}>New game</button>
      </div>
    </div>
  );
}
