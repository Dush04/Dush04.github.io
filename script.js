"use strict";

let rewards = [
  "Hug!",
  "Kiss!",
  "Bike Ride!",
  "Gardening Session!",
  "Glass of Orange Juice (if we have oranges)!",
  "You Decide!",
  "Cake!",
  "Coffee!",
  "Cup of Tea!",
];

let randomElement = rewards[Math.floor(Math.random() * rewards.length)];

document.querySelector(".gen").addEventListener("click", function () {
  document.querySelector(".prize").textContent = randomElement;
  randomElement = rewards[Math.floor(Math.random() * rewards.length)];
});

// document.querySelector(".prize").textContent = randomElement;
