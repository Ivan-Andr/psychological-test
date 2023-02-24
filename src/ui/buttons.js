"use strict";
import { modal } from "./modal.js";
import { timer } from "./timer.js";
import { form } from "./form.js";
const btnStart = document.querySelector("#btn--start");
const btnFinish = document.querySelector("#btn--finish");
const btnInstruction = document.querySelector("#btn--instruction");
const btnCloseInstruction = document.querySelector(".close-modal");
export const btnOpenForm = document.querySelector(".login-button");
const btnCloseForm = document.querySelector(".close-modal-form");

const { openModal, closeModal } = modal();
const { startTestTimer, stopTestTimer } = timer();
const { openModalForm, closeModalForm } = form();

export const startApp = () => {
  btnOpenForm.addEventListener("click", function () {
    openModalForm();
    console.log("Open form");
  });
  btnCloseForm.addEventListener("click", closeModalForm);
};

export const buttons = () => {
  btnStart.addEventListener("click", function () {
    btnInstruction.setAttribute("disabled", true);
    btnInstruction.style.pointerEvents = "none";
    startTestTimer();
  });

  btnFinish.addEventListener("click", function () {
    stopTestTimer();
    btnInstruction.removeAttribute("disabled");
    btnInstruction.style.pointerEvents = "auto";
  });

  btnInstruction.addEventListener("click", function () {
    openModal();
  });

  btnCloseInstruction.addEventListener("click", closeModal);
};
