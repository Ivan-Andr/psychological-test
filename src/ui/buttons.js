"use strict";
import { modal } from "./modal.js";
import { timer } from "./timer.js";
import { form } from "./form.js";
import { langSelect } from "./lang.js";
import { langArr } from "./translation.js";
import { stageReset } from "./logic.js";

import { tableSpace, uiSpace } from "./table/table.js";
const btnStart = document.querySelector("#btn--start");
const btnFinish = document.querySelector("#btn--finish");
const btnStop = document.querySelector("#btn--stop");
export const btnInstruction = document.querySelector("#btn--instruction");
const btnNextStage = document.querySelector("#btn--next");
const btnCloseInstruction = document.querySelector(".close-modal");
export const btnOpenForm = document.querySelector(".login-button");
const btnCloseForm = document.querySelector(".close-modal-form");

const { openModal, closeModal } = modal();
export const { startTestTimer, stopTestTimer } = timer();
const { openModalForm, closeModalForm } = form();

export const startApp = () => {
  btnOpenForm.addEventListener("click", function () {
    openModalForm();
  });
  btnCloseForm.addEventListener("click", closeModalForm);
};

export const buttons = () => {
  btnStart.addEventListener("click", function () {
    btnInstruction.setAttribute("disabled", true);
    btnInstruction.style.pointerEvents = "none";
    tableSpace.style.pointerEvents = "auto";
    startTestTimer();
    //move to another function later
    btnNextStage.setAttribute("disabled", true);
    btnNextStage.style.pointerEvents = "none";
  });

  btnStop.addEventListener("click", function () {
    stageReset();
    // stopTestTimer();
    // btnInstruction.removeAttribute("disabled");
    // btnInstruction.style.pointerEvents = "auto";
  });

  btnInstruction.addEventListener("click", function () {
    openModal();
  });

  btnFinish.addEventListener("click", function () {
    let message = "";
    if (langSelect.value === "ru") {
      message = langArr["confirm-window-message"]["ru"];
    } else if (langSelect.value === "uz") {
      message = langArr["confirm-window-message"]["uz"];
    } else {
      message = langArr["confirm-window-message"]["en"];
    }
    if ((confirmWindow = window.confirm(`${message}`))) {
      location.reload();
    }
  });
  btnCloseInstruction.addEventListener("click", closeModal);
};
