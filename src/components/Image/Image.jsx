import React from "react";
import Dice1 from "../../assets/pictures/dice-1.png";
import Dice2 from "../../assets/pictures/dice-2.png";
import Dice3 from "../../assets/pictures/dice-3.png";
import Dice4 from "../../assets/pictures/dice-4.png";
import Dice5 from "../../assets/pictures/dice-5.png";
import Dice6 from "../../assets/pictures/dice-6.png";

const dices = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
export const Image = ({ random }) => {
  return random ? <img src={dices[random - 1]} alt="dice" /> : null
};
