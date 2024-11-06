/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The junior developer",
  "My teammate",
  "The client",
  "The project manager"
];
let action = ["deleted", "broke", "overwrote", "forgot to save"];
let what = [
  "the HTML file",
  "the CSS stylesheet",
  "the JavaScript function",
  "the entire project folder"
];
let when = [
  "during the code review",
  "right before deployment",
  "when I pushed to production",
  "while debugging",
  "during the live demo"
];

window.onload = function() {
  //write your code here
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  document.getElementById("excuse").innerText = excuse;
};
