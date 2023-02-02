"use strict";

const rightSpace = document.querySelector(".ui--space");
const btnStart = document.querySelector(".btn--start");
const btnFinish = document.querySelector(".btn--finish");
const btnInstruction = document.querySelector(".btn--instruction");
const btnCloseInstruction = document.querySelector(".close-modal");
const labelTimer = document.querySelector(".timer");
const overlay = document.querySelector(".overlay");
const showInstruction = document.querySelector(".modal");
export const buttons = function () {
  btnStart.addEventListener("click", function () {
    console.log("Test started");
    btnInstruction.setAttribute("disabled", true);
    btnInstruction.style.pointerEvents = "none";
    startTestTimer();
  });
  btnFinish.addEventListener("click", function () {
    console.log("Test finished");
    stopTestTimer();
    btnInstruction.removeAttribute("disabled");
    btnInstruction.style.pointerEvents = "auto";
  });
  btnInstruction.addEventListener("click", function () {
    console.log("Show Instruction");
    openModal();
  });
  btnCloseInstruction.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
};
let timer;
const startTestTimer = function () {
  let time = 0;
  const tick = function () {
    labelTimer.textContent = `${time} сек`;
    if (time >= 20) {
      labelTimer.style.color = "red";
    }
    time++;
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

const openModal = function () {
  showInstruction.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  showInstruction.classList.add("hidden");
  overlay.classList.add("hidden");
};
