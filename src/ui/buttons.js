"use strict";
import { modal } from "./modal.js";
import { timer } from "./timer.js";
import { form } from "./form.js";
import { langSelect } from "./lang.js";
import { langArr } from "./translation.js";
import { stageReset } from "./logic.js";
import { tableSpace } from "./table/table.js";
import { showResult } from "./result.js";
export let stageID = 1;
export let stageIDRu = `Этап ${stageID}`;
console.log(stageIDRu);
export let stageIDUz = `Vazifa ${stageID}`;
console.log(stageIDUz);
export let stageIDEn = `Stage ${stageID}`;
console.log(stageIDEn);
export const btnStart = document.querySelector("#btn--start");
const btnFinish = document.querySelector("#btn--finish");
const btnStop = document.querySelector("#btn--stop");
export const btnResult = document.querySelector("#btn--result");
export const btnInstruction = document.querySelector("#btn--instruction");
export const btnNextStage = document.querySelector("#btn--next");
const btnCloseInstruction = document.querySelector(".close-modal");
export const btnOpenForm = document.querySelector(".login-button");
const btnCloseForm = document.querySelector(".close-modal-form");
const instructionStage1 = document.querySelector("#instruction-stage1");
const instructionStage2 = document.querySelector("#instruction-stage2");
const instructionStage3 = document.querySelector("#instruction-stage3");

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
  btnNextStage.setAttribute("disabled", true);
  btnNextStage.style.pointerEvents = "none";
  btnResult.setAttribute("disabled", true);
  btnResult.style.pointerEvents = "none";
  btnStart.addEventListener("click", function () {
    btnInstruction.setAttribute("disabled", true);
    btnInstruction.style.pointerEvents = "none";
    tableSpace.style.pointerEvents = "auto";
    startTestTimer();
    btnStart.setAttribute("disabled", true);
    btnStart.style.pointerEvents = "none";
    btnResult.setAttribute("disabled", true);
    btnResult.style.pointerEvents = "none";
  });

  btnStop.addEventListener("click", function () {
    stageReset();
  });

  btnInstruction.addEventListener("click", function () {
    openModal();
  });
  btnNextStage.addEventListener("click", function () {
    btnNextStage.setAttribute("disabled", true);
    btnNextStage.style.pointerEvents = "none";
    if (stageID < 4) stageID++;
    console.log(stageID);
    if (stageID === 2) {
      instructionStage2.classList.remove("hidden");
      instructionStage1.classList.add("hidden");
    } else if (stageID === 3 || stageID === 4) {
      instructionStage3.classList.remove("hidden");
      instructionStage2.classList.add("hidden");
      instructionStage1.classList.add("hidden");
    }
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
    if (window.confirm(`${message}`)) {
      localStorage.clear();
      location.reload();
    }
  });
  btnResult.addEventListener("click", function () {
    showResult();
  });
  btnCloseInstruction.addEventListener("click", closeModal);
};
