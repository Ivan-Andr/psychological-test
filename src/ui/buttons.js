"use strict";
import { modal } from "./modal.js";
import { timer } from "./timer.js";

const btnStart = document.querySelector(".btn--start");
const btnFinish = document.querySelector(".btn--finish");
const btnInstruction = document.querySelector(".btn--instruction");
const btnCloseInstruction = document.querySelector(".close-modal");

const { openModal, closeModal } = modal();
const { startTestTimer, stopTestTimer } = timer();

export const buttons = () => {
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
};
