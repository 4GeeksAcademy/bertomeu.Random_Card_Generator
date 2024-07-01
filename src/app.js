/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  let suits = ["spade", "club", "heart", "diamond"];
  let values = [
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
  let symbols = { spade: "♠", club: "♣", heart: "♥", diamond: "♦" };

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  let cardDiv = document.getElementById("card");
  cardDiv.className = `card ${randomSuit}`;

  let topLeftDiv = cardDiv.querySelector(".top-left");
  let bottomRightDiv = cardDiv.querySelector(".bottom-right");
  let centerDiv = cardDiv.querySelector(".center");

  topLeftDiv.innerHTML = symbols[randomSuit];
  bottomRightDiv.innerHTML = symbols[randomSuit];
  centerDiv.innerHTML = randomValue;
}

window.onload = function() {
  generateCard();
  document.getElementById("generateButton").onclick = generateCard;
};
