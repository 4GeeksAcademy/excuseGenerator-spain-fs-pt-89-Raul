/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // funcion crear aleatorio
  function createAleatoryElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  //aleatoriedad
  function createRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  let arraywho = createRandomIndex(who);
  let arrayaction = createRandomIndex(action);
  let arraywhat = createRandomIndex(what);
  let arraywhen = createRandomIndex(when);

  //excusa
  document.querySelector("#excuse").innerHTML =
    who[arraywho] +
    " " +
    action[arrayaction] +
    " " +
    what[arraywhat] +
    " " +
    when[arraywhen];
};
