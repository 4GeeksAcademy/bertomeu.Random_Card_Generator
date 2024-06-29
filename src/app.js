/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  const suits = ["spade", "club", "heart", "diamond"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const symbols = { spade: "♠", club: "♣", heart: "♥", diamond: "♦" };

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardDiv = document.getElementById("card");
  cardDiv.className = `card ${randomSuit}`;

  const topLeftDiv = cardDiv.querySelector(".top-left");
  const bottomRightDiv = cardDiv.querySelector(".bottom-right");
  const centerDiv = cardDiv.querySelector(".center");

  topLeftDiv.innerHTML = symbols[randomSuit];
  bottomRightDiv.innerHTML = symbols[randomSuit];
  centerDiv.innerHTML = randomValue;
}

window.onload = function() {
  generateCard();
  document.getElementById("generateButton").onclick = generateCard;
};
