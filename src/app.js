/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let where = ["my home"];

function generateRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

window.onload = function() {
  //write your code here

  let excuse = `${who[generateRandomIndex(who)]} ${
    what[generateRandomIndex(what)]
  } 
  ${when[generateRandomIndex(when)]}

  ${where[generateRandomIndex(where)]}
  `;
  document.getElementById("excuse").innerHTML = excuse.toUpperCase();
};
