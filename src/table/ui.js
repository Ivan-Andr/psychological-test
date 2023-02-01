"use strict";

const rightSpace = document.querySelector(".ui--space");
const btnStart = document.querySelector(".btn--start");
const btnFinish = document.querySelector(".btn--finish");
const labelTimer = document.querySelector(".timer");
export const buttons = function () {
  btnStart.addEventListener("click", function () {
    console.log("Test started");
    startTestTimer();
  });
  btnFinish.addEventListener("click", function () {
    console.log("Test finished");
    stopTestTimer();
  });
};
let timer;
const startTestTimer = function () {
  let time = 0;
  const tick = function () {
    time++;
    labelTimer.textContent = `${time} сек`;
    if (time >= 20) {
      labelTimer.style.color = "red";
    }
  };
  //// check if an interval has already been set up
  if (!timer) {
    timer = setInterval(tick, 1000);
    return timer;
  }
};

const stopTestTimer = function () {
  clearInterval(timer);
  timer = null;
};
